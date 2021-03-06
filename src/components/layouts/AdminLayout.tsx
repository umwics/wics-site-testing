import { Box } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import AdminHeader from "../admin/AdminHeader";
import Footer from "../Footer";

interface Props {
    children?: React.ReactNode;
    title?: string;
}

const useStyles = makeStyles((_theme: Theme) => ({
    container: {
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column"
    }
}));

const AdminLayout: React.FC<Props> = ({ children, title }: Props) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <AdminHeader title={title} />
            {children}
            <Footer />
        </Box>
    );
};

export default AdminLayout;
