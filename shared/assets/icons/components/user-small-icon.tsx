import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgUserSmallIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="transparent" {...props}>
      <G id="heroicons-solid/user" clipPath="url(#clip0_81_3531)">
        <G id="Vector">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.68739 6.25C7.68739 3.86827 9.61816 1.9375 11.9999 1.9375C14.3816 1.9375 16.3124 3.86827 16.3124 6.25C16.3124 8.63173 14.3816 10.5625 11.9999 10.5625C9.61816 10.5625 7.68739 8.63173 7.68739 6.25Z"
            fill="#1B1B1B"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.09483 19.7676C4.16895 15.4649 7.67971 12 11.9999 12C16.3202 12 19.831 15.4651 19.905 19.7679C19.9099 20.0533 19.7455 20.3145 19.4861 20.4335C17.2062 21.4796 14.6703 22.0625 12.0002 22.0625C9.32984 22.0625 6.79368 21.4795 4.5137 20.4332C4.25431 20.3142 4.08992 20.053 4.09483 19.7676Z"
            fill="#1B1B1B"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_81_3531">
          <Rect
            width={23}
            height={23}
            fill={props.fill}
            transform="translate(0.5 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgUserSmallIcon;
