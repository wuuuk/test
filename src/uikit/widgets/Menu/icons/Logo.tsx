import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 279 43" {...props}>
        <path d="M9.9939 3.8923C10.3715 1.87835 12.13 0.418945 14.179 0.418945H19.708C22.3742 0.418945 24.3845 2.84125 23.8932 5.46172L19.1029 31.0101C18.7252 33.0241 16.9668 34.4835 14.9177 34.4835H9.38871C6.72258 34.4835 4.71224 32.0612 5.20358 29.4407L9.9939 3.8923Z" fill="#5D2987" />
        <path d="M22.3631 20.8135C24.0444 22.7847 27.0816 22.8101 28.7957 20.8675L40.5957 7.49411C43.0217 4.74468 41.0695 0.418819 37.4029 0.418819H14.1962C10.5631 0.418819 8.59883 4.676 10.9565 7.44014L22.3631 20.8135Z" fill="#FF3C88" />
        <path d="M18.8535 13.8055C20.5423 11.9533 23.4577 11.9533 25.1465 13.8055L37.5019 27.3566C39.9945 30.0904 38.0549 34.4835 34.3554 34.4835H9.64462C5.94506 34.4835 4.00551 30.0904 6.4981 27.3566L18.8535 13.8055Z" fill="#5DAFFD" style={{mixBlendMode: 'multiply'}} />
        <path d="M75.5664 20.4404L83.3332 33.4189H74.3742L69.537 25.6522L67.2888 27.7302L66.1646 33.4189H58.2617L63.0307 9.57378H70.9337L69.2304 18.0218L78.2916 9.57378H87.5231L75.5664 20.4404ZM105.275 22.6546C105.275 23.6765 105.138 24.7552 104.866 25.8907H91.8192C91.9782 26.6628 92.3529 27.2192 92.9433 27.5598C93.5338 27.9005 94.3513 28.0708 95.396 28.0708C96.9402 28.0708 98.2915 27.6393 99.4497 26.7764L102.652 31.4432C100.381 32.9875 97.667 33.7596 94.5103 33.7596C92.4891 33.7596 90.6951 33.4076 89.1281 32.7036C87.5839 31.9996 86.3802 31.0004 85.5173 29.7059C84.677 28.4115 84.2569 26.8899 84.2569 25.1413C84.2569 23.0974 84.7338 21.2693 85.6876 19.6569C86.6641 18.0218 88.0267 16.75 89.7753 15.8417C91.524 14.9106 93.5338 14.445 95.8048 14.445C97.7578 14.445 99.4497 14.797 100.88 15.501C102.311 16.1823 103.401 17.1475 104.151 18.3965C104.9 19.6228 105.275 21.0422 105.275 22.6546ZM95.4641 19.6909C94.6239 19.6909 93.9199 19.918 93.3521 20.3722C92.8071 20.8037 92.3983 21.4055 92.1258 22.1777H98.2233C98.2233 21.4055 97.9735 20.8037 97.4739 20.3722C96.9743 19.918 96.3044 19.6909 95.4641 19.6909ZM129.654 14.7857L118.208 33.7937C117.186 35.4969 116.187 36.814 115.21 37.7451C114.234 38.6989 113.189 39.3689 112.076 39.7549C110.986 40.1637 109.703 40.3681 108.227 40.3681C107.205 40.3681 106.195 40.2205 105.195 39.9253C104.173 39.63 103.356 39.244 102.743 38.7671L106.081 33.4189C106.944 34.0775 107.875 34.4068 108.874 34.4068C109.624 34.4068 110.26 34.1457 110.782 33.6233L106.694 14.7857H114.359L116.266 24.8006L122.125 14.7857H129.654ZM143.264 14.445C145.286 14.445 146.898 14.99 148.102 16.0801C149.328 17.1702 149.941 18.7371 149.941 20.781C149.941 21.5531 149.862 22.3366 149.703 23.1315L147.659 33.4189H139.96L141.834 24.0512C141.924 23.5062 141.97 23.1315 141.97 22.9271C141.97 21.5872 141.323 20.9173 140.028 20.9173C138.211 20.9173 137.065 22.0982 136.588 24.46L134.782 33.4189H127.084L130.797 14.7857H138.052L137.678 16.6592C138.473 15.9098 139.347 15.3534 140.301 14.99C141.277 14.6267 142.265 14.445 143.264 14.445ZM173.204 22.6546C173.204 23.6765 173.068 24.7552 172.795 25.8907H159.749C159.908 26.6628 160.282 27.2192 160.873 27.5598C161.463 27.9005 162.281 28.0708 163.325 28.0708C164.87 28.0708 166.221 27.6393 167.379 26.7764L170.581 31.4432C168.31 32.9875 165.596 33.7596 162.44 33.7596C160.419 33.7596 158.625 33.4076 157.058 32.7036C155.513 31.9996 154.31 31.0004 153.447 29.7059C152.606 28.4115 152.186 26.8899 152.186 25.1413C152.186 23.0974 152.663 21.2693 153.617 19.6569C154.594 18.0218 155.956 16.75 157.705 15.8417C159.453 14.9106 161.463 14.445 163.734 14.445C165.687 14.445 167.379 14.797 168.81 15.501C170.241 16.1823 171.331 17.1475 172.08 18.3965C172.829 19.6228 173.204 21.0422 173.204 22.6546ZM163.394 19.6909C162.553 19.6909 161.849 19.918 161.282 20.3722C160.737 20.8037 160.328 21.4055 160.055 22.1777H166.153C166.153 21.4055 165.903 20.8037 165.403 20.3722C164.904 19.918 164.234 19.6909 163.394 19.6909ZM183.132 33.964C181.065 33.964 179.124 33.7482 177.307 33.3168C175.49 32.8626 173.991 32.2721 172.81 31.5454L175.91 25.6182C178.476 27.0943 181.156 27.8324 183.949 27.8324C184.971 27.8324 185.755 27.7075 186.3 27.4577C186.845 27.2078 187.117 26.8672 187.117 26.4357C187.117 26.0269 186.833 25.6977 186.266 25.4478C185.721 25.198 184.846 24.9255 183.643 24.6303C182.053 24.2215 180.736 23.8128 179.691 23.404C178.647 22.9725 177.727 22.3253 176.932 21.4623C176.16 20.5766 175.774 19.4184 175.774 17.9877C175.774 16.1937 176.251 14.6267 177.205 13.2868C178.181 11.9242 179.578 10.8796 181.395 10.1529C183.211 9.40346 185.357 9.02875 187.833 9.02875C189.604 9.02875 191.251 9.21043 192.772 9.57378C194.316 9.91443 195.645 10.414 196.758 11.0726L193.862 16.9317C192.931 16.3413 191.898 15.8984 190.762 15.6032C189.649 15.308 188.503 15.1604 187.322 15.1604C186.209 15.1604 185.346 15.3193 184.733 15.6373C184.12 15.9552 183.813 16.3299 183.813 16.7614C183.813 17.1929 184.086 17.5335 184.631 17.7833C185.198 18.0331 186.118 18.3057 187.39 18.6009C188.934 18.9642 190.229 19.3503 191.273 19.7591C192.341 20.1678 193.26 20.8037 194.032 21.6667C194.805 22.5297 195.191 23.6651 195.191 25.0731C195.191 26.8445 194.702 28.4001 193.726 29.74C192.749 31.0798 191.353 32.1245 189.536 32.8739C187.719 33.6006 185.584 33.964 183.132 33.964ZM231.281 14.7857L221.232 33.4189H213.635L212.273 24.8006L207.81 33.4189H200.248L197.25 14.7857H204.268L205.596 24.5281L210.876 14.7857H217.485L218.847 24.5962L224.127 14.7857H231.281ZM252.665 14.7857L248.952 33.4189H241.696L242.037 31.7157C240.629 33.0783 238.948 33.7596 236.995 33.7596C235.723 33.7596 234.497 33.4189 233.316 32.7377C232.135 32.0564 231.17 31.0685 230.421 29.774C229.694 28.4569 229.33 26.9126 229.33 25.1413C229.33 23.1428 229.773 21.326 230.659 19.6909C231.567 18.0558 232.782 16.7728 234.304 15.8417C235.825 14.9106 237.472 14.445 239.243 14.445C241.741 14.445 243.513 15.2171 244.557 16.7614L244.966 14.7857H252.665ZM237.131 24.7666C237.131 25.6522 237.37 26.3676 237.847 26.9126C238.346 27.4349 239.028 27.6961 239.89 27.6961C240.89 27.6961 241.696 27.31 242.309 26.5379C242.945 25.7658 243.263 24.7325 243.263 23.438C243.263 22.5524 243.013 21.8484 242.513 21.326C242.037 20.781 241.367 20.5085 240.504 20.5085C239.504 20.5085 238.687 20.8946 238.051 21.6667C237.438 22.4388 237.131 23.4721 237.131 24.7666ZM268 14.445C269.272 14.445 270.498 14.7857 271.679 15.4669C272.86 16.1482 273.814 17.1475 274.541 18.4646C275.29 19.7591 275.665 21.292 275.665 23.0633C275.665 25.0618 275.211 26.8786 274.302 28.5137C273.417 30.1488 272.213 31.4318 270.691 32.3629C269.17 33.294 267.523 33.7596 265.752 33.7596C263.254 33.7596 261.483 32.9875 260.438 31.4432L258.701 40.0275H251.002L256.044 14.7857H263.299L262.959 16.4889C264.367 15.1263 266.047 14.445 268 14.445ZM264.492 27.6961C265.491 27.6961 266.297 27.31 266.91 26.5379C267.546 25.7658 267.864 24.7325 267.864 23.438C267.864 22.5524 267.614 21.8484 267.115 21.326C266.638 20.781 265.968 20.5085 265.105 20.5085C264.106 20.5085 263.288 20.8946 262.652 21.6667C262.039 22.4388 261.732 23.4721 261.732 24.7666C261.732 25.6522 261.971 26.3676 262.448 26.9126C262.947 27.4349 263.629 27.6961 264.492 27.6961Z" fill="#FF3C88" />
        <path d="M76.9858 21.8593L84.7525 34.8379H75.7936L70.9564 27.0712L68.7081 29.1491L67.584 34.8379H59.681L64.4501 10.9927H72.353L70.6498 19.4407L79.711 10.9927H88.9425L76.9858 21.8593ZM106.694 24.0735C106.694 25.0954 106.558 26.1741 106.285 27.3096H93.2386C93.3976 28.0818 93.7723 28.6381 94.3627 28.9788C94.9532 29.3194 95.7707 29.4898 96.8154 29.4898C98.3596 29.4898 99.7108 29.0583 100.869 28.1953L104.071 32.8621C101.8 34.4064 99.0863 35.1785 95.9297 35.1785C93.9085 35.1785 92.1145 34.8265 90.5475 34.1225C89.0032 33.4185 87.7996 32.4193 86.9366 31.1249C86.0964 29.8304 85.6763 28.3089 85.6763 26.5602C85.6763 24.5163 86.1532 22.6882 87.107 21.0758C88.0835 19.4407 89.4461 18.169 91.1947 17.2606C92.9434 16.3295 94.9532 15.864 97.2241 15.864C99.1772 15.864 100.869 16.216 102.3 16.92C103.73 17.6012 104.821 18.5664 105.57 19.8154C106.319 21.0418 106.694 22.4611 106.694 24.0735ZM96.8835 21.1099C96.0432 21.1099 95.3392 21.337 94.7715 21.7912C94.2265 22.2227 93.8177 22.8245 93.5452 23.5966H99.6427C99.6427 22.8245 99.3929 22.2227 98.8933 21.7912C98.3937 21.337 97.7237 21.1099 96.8835 21.1099ZM131.073 16.2046L119.627 35.2126C118.605 36.9158 117.606 38.233 116.63 39.1641C115.653 40.1179 114.609 40.7878 113.496 41.1739C112.406 41.5827 111.123 41.7871 109.646 41.7871C108.625 41.7871 107.614 41.6394 106.615 41.3442C105.593 41.049 104.775 40.6629 104.162 40.186L107.5 34.8379C108.363 35.4965 109.294 35.8258 110.294 35.8258C111.043 35.8258 111.679 35.5646 112.201 35.0423L108.114 16.2046H115.778L117.686 26.2196L123.545 16.2046H131.073ZM144.684 15.864C146.705 15.864 148.317 16.409 149.521 17.4991C150.747 18.5891 151.36 20.1561 151.36 22.2C151.36 22.9721 151.281 23.7556 151.122 24.5504L149.078 34.8379H141.379L143.253 25.4701C143.344 24.9251 143.389 24.5504 143.389 24.346C143.389 23.0061 142.742 22.3362 141.448 22.3362C139.631 22.3362 138.484 23.5171 138.007 25.8789L136.202 34.8379H128.503L132.216 16.2046H139.472L139.097 18.0781C139.892 17.3287 140.766 16.7723 141.72 16.409C142.697 16.0456 143.684 15.864 144.684 15.864ZM174.623 24.0735C174.623 25.0954 174.487 26.1741 174.215 27.3096H161.168C161.327 28.0818 161.702 28.6381 162.292 28.9788C162.883 29.3194 163.7 29.4898 164.745 29.4898C166.289 29.4898 167.64 29.0583 168.798 28.1953L172.001 32.8621C169.73 34.4064 167.016 35.1785 163.859 35.1785C161.838 35.1785 160.044 34.8265 158.477 34.1225C156.933 33.4185 155.729 32.4193 154.866 31.1249C154.026 29.8304 153.606 28.3089 153.606 26.5602C153.606 24.5163 154.083 22.6882 155.036 21.0758C156.013 19.4407 157.375 18.169 159.124 17.2606C160.873 16.3295 162.883 15.864 165.154 15.864C167.107 15.864 168.798 16.216 170.229 16.92C171.66 17.6012 172.75 18.5664 173.499 19.8154C174.249 21.0418 174.623 22.4611 174.623 24.0735ZM164.813 21.1099C163.973 21.1099 163.269 21.337 162.701 21.7912C162.156 22.2227 161.747 22.8245 161.475 23.5966H167.572C167.572 22.8245 167.322 22.2227 166.823 21.7912C166.323 21.337 165.653 21.1099 164.813 21.1099ZM184.551 35.3829C182.485 35.3829 180.543 35.1672 178.726 34.7357C176.909 34.2815 175.411 33.6911 174.23 32.9643L177.329 27.0371C179.896 28.5132 182.575 29.2513 185.369 29.2513C186.391 29.2513 187.174 29.1264 187.719 28.8766C188.264 28.6268 188.537 28.2861 188.537 27.8547C188.537 27.4459 188.253 27.1166 187.685 26.8668C187.14 26.617 186.266 26.3445 185.062 26.0492C183.472 25.6405 182.155 25.2317 181.111 24.8229C180.066 24.3914 179.146 23.7442 178.351 22.8812C177.579 21.9956 177.193 20.8374 177.193 19.4067C177.193 17.6126 177.67 16.0456 178.624 14.7058C179.6 13.3432 180.997 12.2985 182.814 11.5718C184.631 10.8224 186.777 10.4477 189.252 10.4477C191.023 10.4477 192.67 10.6294 194.191 10.9927C195.736 11.3334 197.064 11.833 198.177 12.4916L195.281 18.3507C194.35 17.7602 193.317 17.3174 192.182 17.0221C191.069 16.7269 189.922 16.5793 188.741 16.5793C187.628 16.5793 186.765 16.7383 186.152 17.0562C185.539 17.3741 185.232 17.7489 185.232 18.1803C185.232 18.6118 185.505 18.9525 186.05 19.2023C186.618 19.4521 187.537 19.7246 188.809 20.0198C190.353 20.3832 191.648 20.7692 192.693 21.178C193.76 21.5868 194.68 22.2227 195.452 23.0856C196.224 23.9486 196.61 25.0841 196.61 26.4921C196.61 28.2634 196.122 29.8191 195.145 31.1589C194.169 32.4988 192.772 33.5434 190.955 34.2929C189.139 35.0196 187.004 35.3829 184.551 35.3829ZM232.7 16.2046L222.651 34.8379H215.055L213.692 26.2196L209.23 34.8379H201.667L198.67 16.2046H205.687L207.015 25.9471L212.295 16.2046H218.904L220.266 26.0152L225.546 16.2046H232.7ZM254.084 16.2046L250.371 34.8379H243.115L243.456 33.1347C242.048 34.4972 240.367 35.1785 238.414 35.1785C237.143 35.1785 235.916 34.8379 234.735 34.1566C233.554 33.4753 232.589 32.4874 231.84 31.193C231.113 29.8758 230.75 28.3316 230.75 26.5602C230.75 24.5618 231.193 22.745 232.078 21.1099C232.987 19.4748 234.202 18.1917 235.723 17.2606C237.245 16.3295 238.891 15.864 240.663 15.864C243.161 15.864 244.932 16.6361 245.977 18.1803L246.385 16.2046H254.084ZM238.551 26.1855C238.551 27.0712 238.789 27.7865 239.266 28.3316C239.766 28.8539 240.447 29.1151 241.31 29.1151C242.309 29.1151 243.115 28.729 243.728 27.9569C244.364 27.1847 244.682 26.1514 244.682 24.857C244.682 23.9713 244.432 23.2673 243.933 22.745C243.456 22.2 242.786 21.9274 241.923 21.9274C240.924 21.9274 240.106 22.3135 239.47 23.0856C238.857 23.8578 238.551 24.8911 238.551 26.1855ZM269.42 15.864C270.691 15.864 271.918 16.2046 273.099 16.8859C274.28 17.5672 275.233 18.5664 275.96 19.8836C276.71 21.178 277.084 22.7109 277.084 24.4823C277.084 26.4807 276.63 28.2975 275.722 29.9326C274.836 31.5677 273.632 32.8508 272.111 33.7819C270.589 34.713 268.943 35.1785 267.171 35.1785C264.673 35.1785 262.902 34.4064 261.857 32.8621L260.12 41.4464H252.422L257.463 16.2046H264.719L264.378 17.9078C265.786 16.5452 267.467 15.864 269.42 15.864ZM265.911 29.1151C266.91 29.1151 267.716 28.729 268.33 27.9569C268.966 27.1847 269.283 26.1514 269.283 24.857C269.283 23.9713 269.034 23.2673 268.534 22.745C268.057 22.2 267.387 21.9274 266.524 21.9274C265.525 21.9274 264.707 22.3135 264.072 23.0856C263.458 23.8578 263.152 24.8911 263.152 26.1855C263.152 27.0712 263.39 27.7865 263.867 28.3316C264.367 28.8539 265.048 29.1151 265.911 29.1151Z" fill="#5DAFFD" style={{ mixBlendMode: 'multiply' }} />
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
