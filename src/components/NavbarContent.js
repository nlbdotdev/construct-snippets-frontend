import React, { useState } from 'react';
import { createStyles, Navbar, Group, Code, Text } from '@mantine/core';
import {
    BellRinging,
    Fingerprint,
    Key,
    Settings,
    TwoFA,
    DatabaseImport,
    Receipt2,
    SwitchHorizontal,
    Logout,
} from 'tabler-icons-react';
import { Link } from 'react-router-dom';



const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef('icon');
    return {
        navbar: {
            backgroundColor: theme.colors[theme.primaryColor][6],
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

const data = [
    { link: '/', label: 'Home', icon: BellRinging },
    { link: '/user', label: 'My Stuff', icon: Receipt2 },
    { link: '/404', label: 'Favorites', icon: Fingerprint },
    { link: '/user/new', label: 'SSH Keys', icon: Key },
    { link: '', label: 'Databases', icon: DatabaseImport },
    { link: '', label: 'Authentication', icon: TwoFA },
    { link: '', label: 'Other Settings', icon: Settings },
];

export default function NavbarContent({ opened }) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (

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
    ));

    return (
        <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 300, lg: 350 }} className={classes.navbar}>
            <Navbar.Section grow>
                {links}
            </Navbar.Section>

            {/* Replace w/ username */}
            <Navbar.Section className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <SwitchHorizontal className={classes.linkIcon} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <Logout className={classes.linkIcon} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}