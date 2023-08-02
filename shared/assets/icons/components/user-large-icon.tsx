import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgUserLargeIcon(props: SvgProps) {
  return (
    <Svg width={92} height={92} fill="transparent" {...props}>
      <G id="heroicons-solid/user" clipPath="url(#clip0_81_3525)">
        <G id="Vector">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.75 23C28.75 13.4731 36.4731 5.75 46 5.75C55.527 5.75 63.2501 13.4731 63.2501 23C63.2501 32.5269 55.527 40.25 46 40.25C36.4731 40.25 28.75 32.5269 28.75 23Z"
            fill="#1B1B1B"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.3798 77.0704C14.6763 59.8597 28.7193 46 46 46C63.2812 46 77.3245 59.8603 77.6203 77.0717C77.6399 78.2131 76.9823 79.258 75.9447 79.7341C66.8255 83.9186 56.6817 86.25 46.0013 86.25C35.3198 86.25 25.1752 83.9181 16.0553 79.7329C15.0177 79.2568 14.3602 78.2119 14.3798 77.0704Z"
            fill="#1B1B1B"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_81_3525">
          <Rect width={92} height={92} fill={props.fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgUserLargeIcon;
