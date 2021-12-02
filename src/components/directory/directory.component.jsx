import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';

//using class component as must set state value of menu items
class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    id: 1,
                    title: 'hats',
                    imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    link: 'hats' 
                },
                {
                    id: 2,
                    title: 'jackets',
                    imageUrl: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    link: 'jackets' 
                },
                {
                    id: 3,
                    title: 'shoes',
                    imageUrl: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                    link: 'shoes' 
                },
                {
                    id: 4,
                    title: 'womens',
                    imageUrl: 'https://images.unsplash.com/photo-1512850071827-9242a6124c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                    link: 'womens',
                    size: 'large' 
                },
                {
                    id: 5,
                    title: 'mens',
                    imageUrl: 'https://images.unsplash.com/photo-1620226346750-3aea895ac33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1466&q=80',
                    link: 'mens',
                    size: 'large' 
                },
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    //iterating through sections and passing values as props to menu item component
                    // the ellipses variable is equivalent to just destructuring the props where key and value names match.
                    this.state.sections.map(({id, ...otherSectionsProps}) => (
                        <MenuItem key={id} {...otherSectionsProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;