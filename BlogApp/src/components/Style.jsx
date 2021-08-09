
import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(1),
        maxWidth:400,
        //marginBottom: theme.spacing(18),
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[600] : theme.palette.grey[200],
    },
    content:{
        padding:24,
        marginTop: theme.spacing(2),

    },
    blankPage:{
        maxWidth:1900,// override the default max-width
        minHeight:1100,// to push footer on bottom and avoiding overlapping
        marginBottom:10,
        backgroundColor:theme.palette.grey[100]
    },
    footer: {
        maxWidth:2080,// override the default max-width
        padding:theme.spacing(12,0),
        textAlign: 'center',
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
    title: {
        fontSize: 14,
    },
    iconButton: {
        marginLeft: 'auto',
        marginRight: -12,
    }
}));
