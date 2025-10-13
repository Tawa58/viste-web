const links = [
    {
        id: 1,
        url: '/',
        name: 'Home'
    },

    {
        id: 2,
        url: '#',
        name: 'About',
        submenu: [
            {
                id: 1,
                url: '/about',
                name: 'About Us'
            },
            {
                id: 2,
                url: '/principal-message',
                name: "Principal's Message"
            }
        ]
    },

    {
        id: 3,
        url: '#',
        name: 'Academics',
        submenu: [
            {
                id: 1,
                url: '/holidays-list',
                name: 'Holidays List'
            }
        ]
    },

    {
        id: 4,
        url: '#',
        name: 'More'
    },

    {
        id: 5,
        url: '#',
        name: 'Gallery',
        submenu: [
            {
                id: 1,
                url: '/gallery',
                name: 'Gallery'
            },
            {
                id: 2,
                url: '/notice',
                name: 'Notice'
            },
        ]
    },

    {
        id: 6,
        url: '/contact',
        name: 'Contact Us'
    },
]

export default links;