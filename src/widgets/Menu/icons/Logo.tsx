import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  // const textColor = isDark ? "#FFFFFF" : "#432918";
  return (
    <Svg viewBox="0 0 50 50" {...props}>
      <path fill="none" d="M 227.17,68.24
           C 227.17,68.24 227.17,181.76 227.17,181.76
             227.17,181.76 22.83,181.76 22.83,181.76
             22.83,181.76 22.83,68.24 22.83,68.24
             22.83,68.24 227.17,68.24 227.17,68.24 Z
           M 22.83,0.12
           C 22.83,0.12 22.83,249.88 22.83,249.88M 45.53,0.12
           C 45.53,0.12 45.53,249.88 45.53,249.88M 68.24,0.12
           C 68.24,0.12 68.24,249.88 68.24,249.88M 90.94,0.12
           C 90.94,0.12 90.94,249.88 90.94,249.88M 113.65,0.12
           C 113.65,0.12 113.65,249.88 113.65,249.88M 136.35,0.12
           C 136.35,0.12 136.35,249.88 136.35,249.88M 159.06,0.12
           C 159.06,0.12 159.06,249.88 159.06,249.88M 181.76,0.12
           C 181.76,0.12 181.76,249.88 181.76,249.88M 204.47,0.12
           C 204.47,0.12 204.47,249.88 204.47,249.88M 227.17,0.12
           C 227.17,0.12 227.17,249.88 227.17,249.88M 0.12,22.83
           C 0.12,22.83 249.88,22.83 249.88,22.83M 0.12,45.53
           C 0.12,45.53 249.88,45.53 249.88,45.53M 0.12,68.24
           C 0.12,68.24 249.88,68.24 249.88,68.24M 0.12,90.94
           C 0.12,90.94 249.88,90.94 249.88,90.94M 0.12,113.65
           C 0.12,113.65 249.88,113.65 249.88,113.65M 0.12,136.35
           C 0.12,136.35 249.88,136.35 249.88,136.35M 0.12,159.06
           C 0.12,159.06 249.88,159.06 249.88,159.06M 0.12,181.76
           C 0.12,181.76 249.88,181.76 249.88,181.76M 0.12,204.47
           C 0.12,204.47 249.88,204.47 249.88,204.47M 0.12,227.17
           C 0.12,227.17 249.88,227.17 249.88,227.17M 249.88,0.12
           C 249.88,0.12 249.88,249.88 249.88,249.88
             249.88,249.88 0.12,249.88 0.12,249.88
             0.12,249.88 0.12,0.12 0.12,0.12
             0.12,0.12 249.88,0.12 249.88,0.12 Z" />
    </Svg>
      
    // <Svg viewBox="0 0 160 26" {...props}>
    //   <circle cx="15" cy="15" r="15" fill="#64C6EB" />
    //   <g>
    //     <path
    //       d="M14,5a6,6,0,0,0-3.34-4C7.92-.09,4.17-.66,1.67,1.2s.89,8.3,3.14,8.58,5.8-1,8.51,1.58S14.3,6,14,5Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#9c9b9b"
    //     />
    //     <path
    //       d="M11.93,4.53C11,2.38,7,1.31,4.56,2.27s.53,5,1.32,5.58A8.12,8.12,0,0,0,10,8.78C10.68,8.57,12.16,5.09,11.93,4.53Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#706f6e"
    //     />
    //   </g>
    //   <g>
    //     <path
    //       d="M18.23,5a6,6,0,0,1,3.34-4C24.26-.09,28-.66,30.51,1.2s-.89,8.3-3.14,8.58-5.8-1-8.51,1.58S17.88,6,18.23,5Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#a7a5a5"
    //     />
    //     <path
    //       d="M20.25,4.53c.89-2.15,5-3.22,7.37-2.26s-.53,5-1.32,5.58a8.12,8.12,0,0,1-4.12.93C21.5,8.57,20,5.09,20.25,4.53Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#868686"
    //     />
    //   </g>
    //   <g>
    //     <path
    //       d="M16.17,25.92c6.61,0,14.59-4.85,13-11.62-.56-2.31-1-5-1-5a8.4,8.4,0,0,0-8.4-8.4,32.91,32.91,0,0,1-3.59.33A32.91,32.91,0,0,1,12.55.94a8.39,8.39,0,0,0-8.39,8.4s-.44,2.65-1,5c-1.64,6.77,6.35,11.62,13,11.62Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#f2f2f2"
    //     />
    //     <path
    //       d="M16.13,1.27A32.62,32.62,0,0,1,12.55.94a8.39,8.39,0,0,0-8.39,8.4s-.44,2.65-1,5c-1.64,6.77,6.35,11.62,13,11.62h0Z"
    //       transform="translate(-0.78 0.01)"
    //       fill="#fff"
    //     />
    //   </g>
    //   <g>
    //     <g>
    //       <path
    //         d="M9.48,13.72a.84.84,0,0,1-.91-.54c-.09-.34.11-.8.47-.82a.83.83,0,0,1,.9.56A.66.66,0,0,1,9.48,13.72Zm0-1.07a.2.2,0,1,0,.19.2A.2.2,0,0,0,9.49,12.65Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#585857"
    //       />
    //       <path
    //         d="M22,12.92a.81.81,0,0,1,.89-.56c.36,0,.56.48.47.82a.83.83,0,0,1-.91.54A.65.65,0,0,1,22,12.92Zm.83-.07a.19.19,0,0,0,.19.2.2.2,0,0,0,0-.4A.19.19,0,0,0,22.85,12.85Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#585857"
    //       />
    //     </g>
    //     <g>
    //       <path
    //         d="M19,21.13c0-1.81-2.89-.28-2.89-1.42,0,1.14-2.89-.39-2.89,1.42A2.72,2.72,0,0,0,16.13,24,2.71,2.71,0,0,0,19,21.13Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#bdbcbc"
    //       />
    //       <path
    //         d="M19,20.8c-.34-1.28-2.85,0-2.85-1.09,0,1.06-2.45-.17-2.84,1.06,0,.1,1,.9,2.85.9S19,20.9,19,20.8Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#cdcccc"
    //       />
    //       <path
    //         d="M16.14,19.73v0c0,1.14-2.89-.39-2.89,1.42A2.72,2.72,0,0,0,16.13,24h0Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#b3b3b3"
    //       />
    //       <path
    //         d="M16.14,19.73v0c0,1.06-2.45-.17-2.84,1.06,0,.1,1,.9,2.85.9Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#c3c2c2"
    //       />
    //     </g>
    //     <g>
    //       <path
    //         d="M16.14,11a3.15,3.15,0,0,1,1.33.29,3.64,3.64,0,0,1,1.81,4.32v0A3,3,0,0,0,19.19,17h0a2.63,2.63,0,0,1-.09,1.15,3.05,3.05,0,0,1-2.86,2.17h-.18a3.07,3.07,0,0,1-2.87-2.17A2.62,2.62,0,0,1,13.11,17h0A3.3,3.3,0,0,0,13,15.69l-.09-.29a3.77,3.77,0,0,1,0-2.13A3,3,0,0,1,15.85,11Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#4d4d4c"
    //       />
    //       <path
    //         d="M16.13,11h-.28A3,3,0,0,0,13,13.27a3.77,3.77,0,0,0,0,2.13l.09.29A3.3,3.3,0,0,1,13.11,17a2.62,2.62,0,0,0,.08,1.15,3.07,3.07,0,0,0,2.87,2.17h.07Z"
    //         transform="translate(-0.78 0.01)"
    //         fill="#585857"
    //       />
    //     </g>
    //   </g>
    //   <g>
    //     <path
    //       d="M46.72,15.63c.2.17.41.37.65.59l.72.68.63.63c.18.2.31.33.38.42l-.46.47-.51.54.3-.25.34-.27c-.09.1-.2.22-.35.36l-.48.47-.49.48-.42.38.2-.14.2-.12-.42.36-.39.34-.5-.48-.8-.82a1.66,1.66,0,0,1,.16.33l-.43-.5-.51-.6c-.18-.2-.36-.41-.53-.62s-.33-.39-.49-.55c0,0,.09.13.19.25L44,18l.31.45.21.32c-.13-.13-.3-.34-.52-.61s-.45-.55-.69-.85l-.69-.87c-.22-.27-.39-.49-.5-.64,0,.22,0,.5,0,.84s0,.62,0,.85a.83.83,0,0,1,0-.12c0-.07,0-.14,0-.23l0-.25a1.64,1.64,0,0,1,0-.18c0,.26,0,.64,0,1.13s-.08,1-.13,1.41c0,0,0-.12.05-.24a1.26,1.26,0,0,1,.07-.28c0,.11,0,.25,0,.41s0,.34,0,.53,0,.36,0,.52,0,.28,0,.36H40l.29,0,.3,0,.19,0h-.49l-.6,0-.59,0-.43,0V18.28l-.07.17-.09.26q0-.5,0-1.17c0-.44,0-.91.06-1.39s0-.95.06-1.41,0-.87,0-1.23c0,.07,0,.25,0,.53s0,.6-.08.93-.06.65-.09.94l-.06.59c0-.54,0-1.23,0-2.08s0-1.73.06-2.62,0-1.74.06-2.51,0-1.35,0-1.73a2,2,0,0,0-.07.39c0,.17,0,.36-.06.56l-.06.62a4.46,4.46,0,0,1-.08.52c0-.17,0-.42,0-.78s0-.71,0-1.09,0-.73,0-1,0-.52,0-.6h.38l.59,0,.67,0h.61l-.24,0-.37,0-.38,0-.27,0h.63l1,0H42.7c0,.08,0,.24,0,.47s-.05.5-.07.8-.06.59-.1.9-.06.58-.07.8c0-.08,0-.23.06-.43s.06-.44.09-.69.07-.49.11-.73a4.51,4.51,0,0,1,.11-.59c0,.2,0,.48-.08.87s-.08.79-.12,1.23-.09.85-.13,1.25-.07.7-.08.91c.47-.44.94-.89,1.43-1.33l1.46-1.32c-.08.07-.23.19-.45.35l-.68.54-.69.54a4.81,4.81,0,0,1-.45.31l.93-.79L45.26,8c.45-.38.87-.72,1.25-1s.61-.49.71-.56c.08.11.21.28.39.5l.66.82c0-.1-.08-.24-.15-.43l-.2-.5.41.61.52.74.5.73c.15.22.26.39.35.5a5.55,5.55,0,0,1-.83.59l-1.3.82a1.19,1.19,0,0,0,.2-.07l.34-.14.36-.16.28-.11c-.18.11-.43.26-.76.44s-.66.38-1,.57l-1,.56-.78.41a2.26,2.26,0,0,0,.71-.18c-.11.07-.26.15-.46.25l-.6.32-.61.32a4.23,4.23,0,0,1-.48.24c.17.18.39.41.69.68s.58.53.86.75c0-.07-.08-.19-.17-.36a13.16,13.16,0,0,1,1.09,1,13.22,13.22,0,0,0,1.06,1A2.67,2.67,0,0,0,47,16Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M60.1,17.82l.34-.31a1.5,1.5,0,0,0,.32-.35,6.33,6.33,0,0,1-2.21,2.64,4.77,4.77,0,0,1-2.79.81,6.39,6.39,0,0,1-1.49-.23,3.47,3.47,0,0,1-1.19-.58.26.26,0,0,1,.09.17.28.28,0,0,0,.1.16,3.31,3.31,0,0,1-1.41-1.3A7.76,7.76,0,0,1,51,16.75c0,.11,0,.29.05.53s0,.45.07.63a5.8,5.8,0,0,1-.5-1.44,13.11,13.11,0,0,1-.26-2,12,12,0,0,1,.07-2.23,8.33,8.33,0,0,1,.52-2.12,2.15,2.15,0,0,0-.28.47,6,6,0,0,1-.34.59,8,8,0,0,1,2.17-3.79,4.63,4.63,0,0,1,3.28-1.25,8.13,8.13,0,0,1,1.41.15,3.83,3.83,0,0,1,1.15.45.73.73,0,0,0-.09-.18,1.71,1.71,0,0,1-.13-.23,4.54,4.54,0,0,1,.73.57,6.49,6.49,0,0,1,.67.79,7.65,7.65,0,0,1,.56.91,8.13,8.13,0,0,1,.41.92,4.34,4.34,0,0,0-.08-.45,3.69,3.69,0,0,1-.1-.6,4.49,4.49,0,0,1,.54,1.31,10.51,10.51,0,0,1,.28,1.68,12.44,12.44,0,0,1,0,1.84A16.86,16.86,0,0,1,61,15.11a11,11,0,0,1-.36,1.57A5.11,5.11,0,0,1,60.1,17.82Zm-2.52-1.63A3.41,3.41,0,0,0,58,15,5.9,5.9,0,0,0,58,13.42a5.65,5.65,0,0,0-.35-1.63,3.08,3.08,0,0,0-.84-1.29.39.39,0,0,1,.26.11,2.27,2.27,0,0,1,.26.27,2.51,2.51,0,0,1,.25.32c.08.11.14.2.2.27-.31-1.22-.95-1.82-1.92-1.82a1,1,0,0,0-.68.25,2.26,2.26,0,0,0-.51.62,3.38,3.38,0,0,0-.34.8c-.08.29-.14.57-.19.83a1.15,1.15,0,0,1-.06-.24q0-.18,0-.39a2.94,2.94,0,0,1,0-.42,2.65,2.65,0,0,1,0-.27,4.89,4.89,0,0,0-.46,1.37,6.65,6.65,0,0,0-.12,1.61,6,6,0,0,0,.3,1.57,3,3,0,0,0,.8,1.24.94.94,0,0,1-.47-.25A2.6,2.6,0,0,1,53.8,16a2.4,2.4,0,0,0,.73,1.14,1.6,1.6,0,0,0,2.34-.31,3.2,3.2,0,0,0,.65-1.74,1.39,1.39,0,0,1,.1.59A2.21,2.21,0,0,1,57.58,16.19Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M70.71,20.63l.3,0,.36,0,.35.05.27.05-.51,0-.82-.05-.85-.06-.52-.05a1.65,1.65,0,0,1-.08-.32l-.09-.55s0,.06,0,.13a1.41,1.41,0,0,0,0,.18q-.06-.34-.12-1c0-.4-.09-.76-.15-1.08,0,.12,0,.31,0,.56a3,3,0,0,1,0,.59l-.06-.35c0-.16,0-.33-.08-.51s-.06-.35-.08-.5a2,2,0,0,1-.05-.33c-.27,0-.61.05-1,.06l-1.11.07.8.08c.28,0,.5.05.66.08H65.67c0,.11-.06.27-.11.47s-.1.4-.15.62l-.16.62a3.67,3.67,0,0,0-.09.42,1.16,1.16,0,0,1,.2-.32l.27-.39c-.08.24-.18.49-.29.76s-.2.5-.29.69H62l.25,0,.41.06c-.12,0-.31,0-.57,0a3.3,3.3,0,0,1-.57-.06c.06-.23.14-.54.25-.92s.22-.79.31-1.25c0,0,0,.12-.08.24a2.75,2.75,0,0,1-.15.36l-.15.35a1.31,1.31,0,0,0-.09.25c.09-.4.22-.88.37-1.45s.3-1.11.46-1.65.3-1,.42-1.42l.21-.79c0,.16-.1.38-.19.68s-.19.59-.29.9-.21.61-.3.88a4,4,0,0,1-.25.6c0-.18.11-.46.22-.84s.21-.8.34-1.27L63,13.86l.36-1.38c.11-.43.21-.79.29-1.08s.13-.46.14-.51-.07.17-.13.32l-.2.44c.05-.15.13-.45.26-.91l.42-1.44c.16-.51.3-1,.43-1.43L64.81,7l-.13.32-.17.46c-.06.17-.13.32-.19.48l-.15.37c.13-.55.25-1.07.35-1.55s.16-.79.18-.93h3.16l-.35,0-.36,0-.28,0h.65l.87,0,.82,0c.26,0,.43,0,.51,0,0,.23.1.52.18.85s.18.82.34,1.48V7.85c.06.32.14.71.23,1.17s.19,1,.28,1.46.19,1,.29,1.55.19,1,.29,1.42v-.18c0-.09,0-.19,0-.29s0-.2,0-.29V12.5c.09.45.21,1,.33,1.62L72,16c.12.61.22,1.19.32,1.73s.18,1,.25,1.24c0-.1,0-.23,0-.39s0-.3,0-.4c0,.17.08.38.12.64s.08.52.11.78.07.48.1.68a3.2,3.2,0,0,1,0,.36ZM67,15.14l.59,0,.61,0a2.14,2.14,0,0,0-.07-.36L68,14.2c0-.23-.1-.44-.15-.64l-.09-.36c0,.05.06.13.09.22a1.84,1.84,0,0,1,.09.28c0,.11.06.2.09.28l.06.19c-.17-.88-.31-1.62-.44-2.23s-.24-1.13-.35-1.57c0,.18-.06.43-.11.74s-.1.65-.16,1-.1.68-.15,1-.09.57-.13.76v-1c-.09.4-.16.76-.23,1.09s-.15.72-.25,1.16l.25,0,.35,0,.35,0h.23a.88.88,0,0,1-.2.07Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M82.08,17.76v1.41c0,.27,0,.54,0,.79s0,.46,0,.63a6.33,6.33,0,0,1-1,0H79.48l.13.08.14.1c-.31,0-.66,0-1,0l-1.1-.09-1.08-.08-.93,0,.4,0,.63,0,.65.05.43.05c-.25,0-.57,0-1,0l-1.15,0-1,0-.54,0c0-.29,0-.83,0-1.62s0-1.72,0-2.8c0,.07,0,.2-.06.39l-.06.61c0,.22,0,.42-.07.61s-.05.32-.06.37q0-.49,0-1.38T74,14.91c0-.64,0-1.27.05-1.88s0-1.09,0-1.46c0,.08,0,.17,0,.26s0,.17,0,.23c0-.24,0-.52,0-.81s0-.6,0-.9,0-.59,0-.88,0-.53,0-.75c0,.07,0,.19,0,.37s0,.38,0,.61l0,.68c0,.23,0,.41,0,.55V8.35c0-.5,0-.95,0-1.35s0-.68,0-.82h2.78l-.57,0-.59,0-.36,0h2.6c0,.18,0,.43,0,.75s0,.68-.07,1.08l-.09,1.2c0,.42,0,.79-.06,1.12a2.54,2.54,0,0,0,.06-.37c0-.18.07-.37.11-.58s.08-.41.11-.6.06-.34.07-.43c0,.41-.07.91-.13,1.49s-.13,1.19-.2,1.82-.13,1.24-.19,1.85-.12,1.14-.16,1.61c0-.1,0-.28.09-.55s.1-.52.16-.75c0,.2,0,.47-.06.8s0,.67-.07,1-.05.67-.08,1,0,.56-.06.74c.48,0,1-.06,1.56-.11l1.58-.12H78.58l.67-.07,1-.11,1-.09.64-.06v1.61c0-.05,0-.15.07-.3Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M92.3,20.63l.3,0,.36,0,.35.05.27.05-.5,0-.83-.05-.85-.06-.52-.05a1.73,1.73,0,0,1-.07-.32c0-.13-.06-.31-.1-.55a.43.43,0,0,1,0,.13,1.41,1.41,0,0,0,0,.18q-.06-.34-.12-1T90.4,18c0,.12,0,.31,0,.56a2.37,2.37,0,0,1,0,.59l-.06-.35c0-.16-.05-.33-.08-.51s0-.35-.08-.5a1.77,1.77,0,0,1,0-.33c-.28,0-.62.05-1,.06l-1.12.07.81.08.66.08H87.27l-.12.47c-.05.19-.1.4-.15.62l-.16.62a3.67,3.67,0,0,0-.09.42,1.65,1.65,0,0,1,.21-.32c.11-.15.19-.28.26-.39-.08.24-.18.49-.28.76s-.21.5-.29.69H83.59l.25,0a2.9,2.9,0,0,1,.41.06c-.12,0-.31,0-.57,0a3.05,3.05,0,0,1-.56-.06c0-.23.13-.54.24-.92s.22-.79.31-1.25l-.08.24c0,.12-.09.24-.14.36s-.11.24-.16.35a1.31,1.31,0,0,0-.09.25c.09-.4.22-.88.37-1.45s.31-1.11.46-1.65.3-1,.42-1.42.19-.68.21-.79c0,.16-.1.38-.19.68s-.19.59-.29.9-.2.61-.3.88a4,4,0,0,1-.25.6c0-.18.12-.46.22-.84s.22-.8.34-1.27l.38-1.44.36-1.38c.11-.43.21-.79.29-1.08s.13-.46.15-.51-.08.17-.14.32-.13.29-.19.44c0-.15.12-.45.25-.91s.28-.93.43-1.44l.42-1.43c.13-.44.22-.73.26-.86l-.13.32-.17.46c-.06.17-.12.32-.19.48l-.15.37c.14-.55.25-1.07.35-1.55s.16-.79.18-.93h3.16l-.35,0-.36,0-.28,0h.65l.87,0,.83,0c.25,0,.42,0,.5,0,0,.23.1.52.18.85s.19.82.34,1.48V7.85c.07.32.15.71.23,1.17s.19,1,.28,1.46.2,1,.29,1.55.19,1,.29,1.42v-.18c0-.09,0-.19,0-.29s0-.2,0-.29V12.5q.15.67.33,1.62c.12.62.25,1.25.36,1.87s.23,1.19.32,1.73.18,1,.25,1.24c0-.1,0-.23,0-.39s0-.3,0-.4c0,.17.08.38.12.64s.08.52.12.78.06.48.09.68a3.2,3.2,0,0,1,0,.36Zm-3.71-5.49.58,0,.61,0a2.14,2.14,0,0,0-.07-.36c0-.2-.1-.41-.15-.64s-.11-.44-.16-.64l-.09-.36a1.23,1.23,0,0,1,.09.22,1.15,1.15,0,0,1,.09.28c0,.11.06.2.09.28l.06.19c-.17-.88-.31-1.62-.43-2.23s-.25-1.13-.36-1.57c0,.18-.06.43-.11.74l-.15,1c-.06.35-.11.68-.16,1s-.09.57-.13.76v-1c-.09.4-.16.76-.23,1.09s-.15.72-.25,1.16l.25,0,.35,0,.35,0H89a.88.88,0,0,1-.2.07Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M105.47,11a3.6,3.6,0,0,1,.4,1.36,9.9,9.9,0,0,1,.07,1.82,9.51,9.51,0,0,1-.29,1.85,4,4,0,0,1-.63,1.41,2.28,2.28,0,0,0,.23-.3l.24-.39a3.71,3.71,0,0,0,.21-.37,2.53,2.53,0,0,1,.12-.24,5.58,5.58,0,0,1-.93,1.74,5.77,5.77,0,0,1-1.41,1.29,7.1,7.1,0,0,1-1.82.86,10.86,10.86,0,0,1-2.13.44,1.74,1.74,0,0,0,.29,0l.39,0,.38,0,.26,0a3.14,3.14,0,0,1-1,.19c-.48,0-1,.07-1.53.08s-1.06,0-1.56,0a5.43,5.43,0,0,1-1.07-.16c0-.13,0-.29,0-.47v-.77c0,.07,0,.18,0,.32s0,.24-.07.33c0-.27,0-.59,0-1s0-.8,0-1.24,0-.9,0-1.37V15a1.6,1.6,0,0,0,0,.33,4.45,4.45,0,0,0,0,.53c0,.19,0,.37,0,.55a2.46,2.46,0,0,1,0,.39c0-.56,0-1.25,0-2.05s0-1.61,0-2.41,0-1.54,0-2.23,0-1.2,0-1.53a3.17,3.17,0,0,0,0,.4c0,.19,0,.4,0,.62a5.79,5.79,0,0,1,0,.61c0,.2,0,.32,0,.38,0-.15-.06-.41-.1-.78a8.63,8.63,0,0,1-.05-1.16,6.6,6.6,0,0,1,.12-1.2,1.84,1.84,0,0,1,.4-.89,1.33,1.33,0,0,1,.81-.32,6.06,6.06,0,0,1,1.35,0,11,11,0,0,1,1.66.3,11.19,11.19,0,0,1,1.74.6,3.1,3.1,0,0,0-.44-.31,4.82,4.82,0,0,0-.5-.27L100,6.3l-.35-.12A6.64,6.64,0,0,1,101.8,7a8.14,8.14,0,0,1,1.72,1.35,7.77,7.77,0,0,1,1.27,1.7,8.1,8.1,0,0,1,.76,1.86,3.84,3.84,0,0,0,0-.42A2.23,2.23,0,0,0,105.47,11Zm-5.37,6.52a2.84,2.84,0,0,0,.9-.6,3.62,3.62,0,0,0,.65-.81,3.82,3.82,0,0,0,.41-.93,4,4,0,0,0,.15-.94,4.08,4.08,0,0,0-.13-1.07,5.27,5.27,0,0,0-.34-.9,5,5,0,0,0-.44-.7c-.15-.2-.28-.36-.39-.49a1.31,1.31,0,0,1,.45.39c.16.18.27.33.36.44a3.84,3.84,0,0,0-1-1.17A5,5,0,0,0,99.36,10c0,.23,0,.5,0,.8s0,.62,0,.93,0,.63,0,.94,0,.59-.06.84a2.46,2.46,0,0,1,0-.26c0-.12,0-.24,0-.38s0-.27,0-.38,0-.2,0-.24c0,.51,0,1-.07,1.54s-.06,1-.1,1.49c0-.07,0-.16,0-.28s0-.27-.06-.46c0,.25,0,.52-.05.8s0,.58-.07.86l-.06.82c0,.26,0,.48,0,.68a4,4,0,0,0,1.12-.32,5,5,0,0,0,1.21-.78,2,2,0,0,1-.41.51A3.92,3.92,0,0,1,100.1,17.51Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M115.59,18.7a2,2,0,0,1,.06-.46,3.39,3.39,0,0,1,0,.47c0,.19,0,.4,0,.62s0,.44-.05.66,0,.41,0,.58h-4.14l.29,0,.49,0,.52,0h.41a6.14,6.14,0,0,1-1,0l-1.44,0-1.46-.05-1,0a3.8,3.8,0,0,0,.54.07l.49.05h-.64l-.66,0-.54,0-.27,0c0-.14,0-.29,0-.46s0-.35,0-.57V17.7c0,.19-.05.43-.08.7a5,5,0,0,0,0,1,3.68,3.68,0,0,1-.1-.81c0-.36,0-.75,0-1.19s0-.9.06-1.39l.09-1.42s0,.11,0,.2A1,1,0,0,1,107,15q0-.35.09-.75c0-.27.06-.54.08-.8s0-.52.06-.75,0-.41,0-.57c0,.25-.07.55-.11.9a8.72,8.72,0,0,1-.16,1c0-.2,0-.53,0-1s0-.94.06-1.45,0-1,0-1.46,0-.78,0-1c0,.19-.06.39-.1.59a2.13,2.13,0,0,1-.14.46c0-.22.05-.53.07-.93s0-.82,0-1.23,0-.8,0-1.16,0-.6,0-.72h3.43l-.46,0-.47,0h-.31c.26,0,.62,0,1.06,0l1.39,0,1.36.05,1,0a1.38,1.38,0,0,0-.38,0,1.4,1.4,0,0,1-.36-.05h1.81a2.57,2.57,0,0,1,.44,0c0,.29,0,.65,0,1.08s0,.85,0,1.25c0,0,0-.15.08-.33s.07-.3.08-.37c0,.1,0,.23,0,.4l0,.53c0,.18,0,.35,0,.52s0,.31,0,.41H114.5l-1.78,0a3.71,3.71,0,0,0,.41.07,2.25,2.25,0,0,1,.41.07H113l-.75,0-.79-.07-.66-.09c0,.21-.06.48-.09.82s-.07.62-.1.86c0,0,0-.1,0-.21s.06-.23.09-.36,0-.26.08-.39l.06-.28a4.39,4.39,0,0,1,0,.44c0,.19,0,.38-.06.59s0,.41-.08.61-.06.37-.08.5h.81a5.61,5.61,0,0,0,.82,0l-.21-.05-.26,0,.32,0h1.19c0,.18,0,.48,0,.9s0,.85,0,1.29a1.43,1.43,0,0,0,.08-.42,3.13,3.13,0,0,1,.07-.49c0,.19,0,.42,0,.69s0,.53,0,.78,0,.49,0,.7,0,.33,0,.39-.36-.06-.65-.09l-.84-.1.35.13a3.19,3.19,0,0,1,.39.14l-.5-.07-.63-.11-.64-.12-.52-.09a4.89,4.89,0,0,0-.06.59c0,.21,0,.4,0,.56a.34.34,0,0,1,0-.11,1.94,1.94,0,0,1,0-.2,1.17,1.17,0,0,0,0-.2.75.75,0,0,1,0-.15c0,.17,0,.37-.06.61s-.05.45-.08.61c.52,0,1.08-.07,1.67-.08l1.75,0a1,1,0,0,0-.31,0l-.53,0h-1a4.75,4.75,0,0,1,.84-.09l1.16,0h1.75v2.25A2.09,2.09,0,0,0,115.59,18.7Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M125.45,9.55h-1.12l-.87,0c-.31,0-.61,0-.92,0l.21,0,.34,0a3,3,0,0,1,.41,0l.38.07h-.7l-1,0-1,0h-.7a3.47,3.47,0,0,0,0,.39c0,.11,0,.27,0,.49a.92.92,0,0,0,.14-.37c0,.11,0,.25-.05.43l-.06.53c0,.19,0,.37-.05.54s0,.32,0,.44h.48a4.79,4.79,0,0,0,.51,0,2,2,0,0,0-.36-.05,1.84,1.84,0,0,1-.36,0h2.39c0,.12,0,.31,0,.57s0,.53,0,.84,0,.63,0,1,0,.62,0,.87a2.36,2.36,0,0,1,0-.32c0-.16,0-.32,0-.5l.06-.5c0-.17,0-.28.05-.35,0,.11,0,.28,0,.51s0,.48,0,.73,0,.47,0,.67,0,.32,0,.36l-.38-.05-.57-.08-.62-.07a4.73,4.73,0,0,1-.52-.07l.5.1a.92.92,0,0,1,.41.15l-.44-.05-.52-.07-.5-.06-.42,0c-.06.72-.12,1.32-.17,1.81s-.09,1-.14,1.47a1.11,1.11,0,0,0,.13-.27c0-.08,0-.15.08-.22,0,.15,0,.34,0,.56s0,.46,0,.69,0,.43-.06.63,0,.32,0,.39h-1.55l.23,0a1.1,1.1,0,0,1,.26.06h-.4l-.5,0-.49,0-.42,0c0-.17,0-.46,0-.89s0-.85,0-1.26a2.19,2.19,0,0,0,0,.39c0,.2,0,.39-.06.6s0,.4-.06.59a1.5,1.5,0,0,1-.07.38c0-.41,0-.86,0-1.36l.06-1.48c0-.48,0-.95.07-1.4s0-.84.05-1.17a1.08,1.08,0,0,0-.06.19l-.09.23a5,5,0,0,0,0-.5c0-.25,0-.51.08-.79s0-.55.08-.8a4.67,4.67,0,0,0,0-.53c0,.15,0,.33-.07.53s-.07.4-.11.59-.08.35-.12.5a1.51,1.51,0,0,1-.07.25c0-.4.08-.87.11-1.43s.06-1.13.09-1.7,0-1.14,0-1.68,0-1,0-1.36c0,.11,0,.25-.05.41s0,.34-.07.51,0,.33-.06.47,0,.26,0,.32c0-.22,0-.51,0-.89s0-.77,0-1.18,0-.79,0-1.15,0-.61,0-.78h.33l.82,0,1.14,0h1.32l-.56,0-.84,0-.78,0a2.22,2.22,0,0,1-.42,0h2.65l1.54,0,1.47,0q.67,0,1.2,0l.76,0V8c0-.06,0-.16,0-.31l0-.46q0-.23,0-.42a1.5,1.5,0,0,0,0-.24Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //     <path
    //       d="M130.47,14.77c0-.07,0-.16,0-.28s0-.24,0-.37a3.48,3.48,0,0,1,0-.36c0-.11,0-.19.05-.23,0,.45,0,1-.05,1.5s0,1.08-.08,1.62-.06,1-.08,1.5,0,.86-.05,1.16a3.1,3.1,0,0,1,0-.37c0-.18,0-.37,0-.58s0-.41.05-.6a2.38,2.38,0,0,1,.07-.43c0,.11,0,.33,0,.66s0,.68-.05,1,0,.7-.06,1,0,.49,0,.55h-2.23a3.2,3.2,0,0,1,.49,0l.52.08c-.12,0-.31,0-.55,0l-.74,0-.7,0-.41,0c0-.18,0-.43,0-.74s0-.69,0-1.12,0-.89,0-1.39,0-1,0-1.58a1.49,1.49,0,0,0-.08.46,6.2,6.2,0,0,1-.11.65c0-.42,0-.94.06-1.54s.06-1.2.1-1.81.07-1.19.1-1.75.05-1,.05-1.36c0,.15-.06.39-.1.72s-.08.62-.12.85a7.85,7.85,0,0,1,0-.9c0-.33,0-.66,0-1s0-.6,0-.86,0-.45,0-.56l.48,0,.63,0,.65,0h.57l-.35,0-.42,0-.39,0-.27,0h.69l.88,0c.31,0,.58,0,.84,0l.53,0a3.79,3.79,0,0,0,0,.41q0,.25,0,.66l0-.13c0-.08,0-.16.05-.26a2.36,2.36,0,0,1,0-.28.61.61,0,0,1,0-.19c0,.31,0,.72,0,1.22s-.05,1-.08,1.59,0,1.11-.09,1.65S130.48,14.38,130.47,14.77ZM127,8.37c0-.17,0-.41.07-.72s0-.6.07-.85c0,0,0,.11,0,.2s0,.18,0,.29a2.46,2.46,0,0,1-.07.29l-.06.21c0-.08,0-.2,0-.35s0-.31,0-.47,0-.33,0-.48,0-.26,0-.33h2.17l-.23,0-.35,0-.36,0a1.43,1.43,0,0,0-.26,0h2.7c0,.18,0,.4-.05.67a3.73,3.73,0,0,1,0,.65,2.33,2.33,0,0,0,.08-.37,2.45,2.45,0,0,1,.09-.35c0,.23,0,.52,0,.85s0,.62,0,.84h-.47l-.68,0-.71,0h-.54l.23,0,.3,0,.29,0,.19,0-1.13,0Q127.58,8.41,127,8.37Z"
    //       transform="translate(-0.78 0.01)"
    //       fill={textColor}
    //     />
    //   </g>
    // </Svg>
  );
};

export default Logo;
