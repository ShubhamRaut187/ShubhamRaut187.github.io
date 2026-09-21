import { Button, ButtonProps } from "@mui/material";
import { alpha } from "@mui/material/styles";

export interface AppButtonProps extends Omit<ButtonProps, "variant" | "color"> {
    variant?: "solid" | "outline" | "ghost";
    bgColor?: string;
    color?: string;
    hoverBgColor?: string;
}

const AppButton = ({
    variant = "solid",
    bgColor = "#4ADE80",
    color = "#FFFFFF",
    hoverBgColor,
    sx,
    children,
    ...props
}: AppButtonProps) => {
    const styles = {
        solid: {
            backgroundColor: bgColor,
            color,
            "&:hover": {
                backgroundColor: hoverBgColor ?? alpha(bgColor, 0.85),
            },
        },

        outline: {
            backgroundColor: "transparent",
            color: bgColor,
            border: `1px solid ${bgColor}`,
            "&:hover": {
                backgroundColor: alpha(bgColor, 0.08),
            },
        },

        ghost: {
            backgroundColor: "transparent",
            color: bgColor,
            "&:hover": {
                backgroundColor: alpha(bgColor, 0.08),
            },
        },
    };

    return (
        <Button
            disableElevation
            sx={{
                textTransform: "none",
                borderRadius: '4px',
                fontWeight: 600,
                fontFamily: "'Inter' serif",
                px: 2.5,
                py: 1,
                ...styles[variant],
                ...sx,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default AppButton;