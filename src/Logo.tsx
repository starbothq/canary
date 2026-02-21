export function Logo() {
    return (
        <svg
            width="140"
            height="40"
            viewBox="0 0 140 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Coffee cup / star mark */}
            <circle cx="16" cy="20" r="14" stroke="white" strokeWidth="2" fill="none" />
            <path
                d="M16 8l2 5h5l-4 3 1.5 5L16 18l-4.5 3L13 16l-4-3h5z"
                fill="white"
            />
            {/* "starbot" wordmark */}
            <text
                x="38"
                y="26"
                fill="white"
                fontFamily="Plus Jakarta Sans, sans-serif"
                fontWeight="700"
                fontSize="20"
                letterSpacing="-0.02em"
            >
                starbot
            </text>
        </svg>
    );
}
