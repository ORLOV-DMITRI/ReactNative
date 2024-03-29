import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';
function SvgArrowLeftIcon(props: SvgProps) {
  return (
    <Svg width={24} height={24} fill="transparent" {...props}>
      <G clipPath="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill={props.fill} d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgArrowLeftIcon;
