
interface Props {
    children: React.ReactNode,
}

const classes = {
    layout:     'layout-card',
}

export const LayoutCard: React.FC<Props> = (props) => {
    return (
        <div className={classes.layout}>
            {props.children}
        </div>
    )
}