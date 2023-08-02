import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgHeartIcon(props: SvgProps) {
  return (
    <Svg width={18} height={18} fill="transparent" {...props}>
      <G id="heroicons-outline/heart" clipPath="url(#clip0_3146_5038)">
        <Path
          id="Union"
          d="M17.0999 5.72726C17.0999 3.55829 15.2111 1.79999 12.8812 1.79999C11.1391 1.79999 9.64365 2.78292 8.9999 4.18552C8.35615 2.78292 6.86071 1.79999 5.11865 1.79999C2.7887 1.79999 0.899902 3.55829 0.899902 5.72726C0.899902 12.0288 8.9999 16.2 8.9999 16.2C8.9999 16.2 17.0999 12.0288 17.0999 5.72726Z"
          fill={props.fill}
          stroke={props.fill}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3146_5038">
          <Rect width={18} height={18} fill={props.fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgHeartIcon;
