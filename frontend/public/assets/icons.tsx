import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    style?: React.CSSProperties;
    width?: number;
    height?: number;
    fillColor?: string
}

export const icons = {
    icon_eye: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
            >
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
        </svg>
    ),

    icon_eye_slash: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
            >
            <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
            <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
        </svg>
    ),

    icon_user: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
            >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
    ),

    icon_envelope: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
            >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>
    ),

    icon_telephone: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
            >
             <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
        </svg>
    ),

    icon_arrow: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
        >
             <path d="M0.291995 10.1781L9.27619 18.7195C9.67041 19.0935 10.3091 19.0935 10.7043 18.7195C11.0986 18.3456 11.0986 17.7381 10.7043 17.3642L2.43275 9.50047L10.7033 1.63679C11.0976 1.26282 11.0976 0.655393 10.7033 0.280477C10.3091 -0.0934923 9.66942 -0.0934923 9.2752 0.280477L0.290999 8.82181C-0.0971655 9.19191 -0.0971655 9.80888 0.291995 10.1781Z" />
        </svg>
    ),

    icon_whatsapp: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
        >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
    ),

    icon_calendar_filled: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="0 0 16 16"
            {...props}
        >
               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5m9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5M11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
        </svg>
    ),

    icon_instagram: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={props.width || 16}
            height={props.height || 16} 
            fill={props.fillColor || "currentColor"} 
            className={props.className || ""}
            viewBox="50 110 413 302"
            {...props}
        >
        <path d="M256 177.75C212.821 177.75 177.749 212.822 177.749 256C177.749 299.179 212.821 334.336 256 334.336C299.179 334.336 334.336 299.179 334.336 256C334.336 212.822 299.179 177.75 256 177.75Z"/>
        <path d="M374.101 42.6667H137.899C85.4187 42.6667 42.6667 85.4187 42.6667 137.899V374.101C42.6667 426.667 85.4187 469.333 137.899 469.333H374.101C426.667 469.333 469.333 426.667 469.333 374.101V137.899C469.333 85.4187 426.667 42.6667 374.101 42.6667ZM256 394.24C179.797 394.24 117.76 332.203 117.76 256C117.76 179.797 179.797 117.845 256 117.845C332.203 117.845 394.24 179.797 394.24 256C394.24 332.203 332.203 394.24 256 394.24ZM397.141 142.933C381.013 142.933 367.872 129.877 367.872 113.749C367.872 97.6214 381.013 84.4801 397.141 84.4801C413.269 84.4801 426.411 97.6214 426.411 113.749C426.411 129.877 413.269 142.933 397.141 142.933Z"/>
        </svg>
    )
}