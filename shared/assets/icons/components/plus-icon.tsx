import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgPlusIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="transparent" {...props}>
      <G id="heroicons-outline/plus" clipPath="url(#clip0_81_3771)">
        <Path
          id="Vector"
          d="M12 3V21M21 12L3 12"
          stroke={props.fill}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_81_3771">
          <Rect width={24} height={24} fill={props.fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgPlusIcon;
