import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgMoonIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="transparent" {...props}>
      <G clipPath="url(#clip0_3146_5789)">
        <Path
          d="M21.7519 15.0021C20.597 15.484 19.3296 15.7501 18 15.7501C12.6152 15.7501 8.25 11.3849 8.25 6.00011C8.25 4.67052 8.51614 3.40308 8.99806 2.24817C5.47566 3.71798 3 7.19493 3 11.2501C3 16.6349 7.36522 21.0001 12.75 21.0001C16.8052 21.0001 20.2821 18.5245 21.7519 15.0021Z"
          fill={props.fill}
          stroke={props.fill}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3146_5789">
          <Rect width={24} height={24} fill={props.fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgMoonIcon;
