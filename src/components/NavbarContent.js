import React, { useState } from 'react';
import { createStyles, Navbar } from '@mantine/core';
import { Settings, Star, Logout, Login, UserCircle, Home, MathFunction, List, Database, } from 'tabler-icons-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/userContext';

// Styling
const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        navbar: {
            backgroundColor: theme.colors[theme.primaryColor][5],
        },

        version: {
            backgroundColor: theme.colors[theme.primaryColor][7],
            color: theme.white,
            fontWeight: 700,
        },

        header: {
            paddingBottom: theme.spacing.md,
            marginBottom: theme.spacing.md * 1.5,
            borderBottom: `1px solid ${theme.colors[theme.primaryColor][7]}`,
        },

        footer: {
            paddingTop: theme.spacing.md,
            marginTop: theme.spacing.md,
            borderTop: `1px solid ${theme.colors[theme.primaryColor][7]}`,
        },

        link: {
            ...theme.fn.focusStyles(),
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: theme.fontSizes.sm,
            color: theme.white,
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,

            '&:hover': {
                backgroundColor: theme.colors[theme.primaryColor][5],
            },
        },

        linkIcon: {
            ref: icon,
            color: theme.white,
            opacity: 0.75,
            marginRight: theme.spacing.sm,
        },

        linkActive: {
            '&, &:hover': {
                backgroundColor: theme.colors[theme.primaryColor][7],
                [`& .${icon}`]: {
                    opacity: 0.9,
                },
            },
        },
    };
});

export default function NavbarContent({ opened }) {

    // Vars
    const { loggedIn, user } = useUser()
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Home');

    // Link Arrays
    const navLinks = [
        { link: '/', label: 'Home', icon: Home },
        { link: '/favorites', label: 'Favorites', icon: Star },
        { link: '/snippets', label: 'Snippets', icon: MathFunction },
        { link: '/collections', label: 'Collections', icon: List },
        { link: '/mystuff', label: 'My Stuff', icon: Database },
        { link: '/settings', label: 'Settings', icon: Settings },
    ];
    const navLinksLoggedIn = [
        { link: '/account', label: user.username, icon: UserCircle },
        { link: '/logout', label: 'Logout', icon: Logout },
    ];
    const navLinksLoggedOut = [
        { link: '/authentication', label: 'Login', icon: Login },
    ];

    // Converts object to a navbar link
    const objectToLink = (item) => (
        <Link to={item.link} key={item.label}>
            <div
                className={cx(classes.link, { [classes.linkActive]: item.label === active })}
                onClick={(event) => {
                    setActive(item.label);
                }}
            >
                <item.icon className={classes.linkIcon} />
                <span>{item.label}</span>
            </div>
        </Link>
    )

    const links = navLinks.map(item => objectToLink(item))
    const linksLoggedIn = navLinksLoggedIn.map(item => objectToLink(item))
    const linksLoggedOut = navLinksLoggedOut.map(item => objectToLink(item))

    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 300 }} className={classes.navbar}>
            <Navbar.Section grow>
                {links}
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                {loggedIn && linksLoggedIn}
                {!loggedIn && linksLoggedOut}
            </Navbar.Section>
        </Navbar>
    );
}