import Svg, {
  ClipPath,
  Defs,
  G,
  Path,
  Rect,
  SvgProps,
  Circle,
} from 'react-native-svg';
function SvgLoading(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="transparent" {...props}>
      <G id="Loading">
        <Circle
          id="Ellipse 3"
          opacity={0.5}
          cx={12}
          cy={12}
          r={9}
          stroke={props.fill}
          strokeWidth={2}
        />
        <Path
          id="Ellipse 4"
          d="M12 21C7.02944 21 3 16.9706 3 12"
          stroke="#B8DE64"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
}
export default SvgLoading;
