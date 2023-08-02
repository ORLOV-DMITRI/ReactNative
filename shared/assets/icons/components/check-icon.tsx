import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgCheckIcon(props: SvgProps) {
  return (
    <Svg width={19} height={19} fill="transparent" {...props}>
      <G id="outline/check-circle" clipPath="url(#clip0_3213_5659)">
        <Path
          id="Vector"
          d="M7 9.8125L8.6875 11.5L11.5 7.5625M16 9.25C16 12.9779 12.9779 16 9.25 16C5.52208 16 2.5 12.9779 2.5 9.25C2.5 5.52208 5.52208 2.5 9.25 2.5C12.9779 2.5 16 5.52208 16 9.25Z"
          stroke={props.fill}
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3213_5659">
          <Rect
            width={18}
            height={18}
            fill={props.fill}
            transform="translate(0.5 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgCheckIcon;
