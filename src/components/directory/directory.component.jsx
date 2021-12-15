import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

//using class component as must set state value of menu items
const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            //iterating through sections and passing values as props to menu item component
            // the ellipses variable is equivalent to just destructuring the props where key and value names match.
            sections.map(({id, ...otherSectionsProps}) => (
                <MenuItem key={id} {...otherSectionsProps}/>
            ))
        }
    </div>
)

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);