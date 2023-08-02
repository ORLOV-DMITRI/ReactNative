import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgUserMediumIcon(props: SvgProps) {
  return (
    <Svg width={46} height={46} fill="transparent" {...props}>
      <G clipPath="url(#clip0_81_3537)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.375 11.5C14.375 6.73654 18.2366 2.875 23 2.875C27.7635 2.875 31.625 6.73654 31.625 11.5C31.625 16.2635 27.7635 20.125 23 20.125C18.2366 20.125 14.375 16.2635 14.375 11.5Z"
          fill="#1B1B1B"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.18991 38.5352C7.33815 29.9298 14.3597 23 23 23C31.6406 23 38.6622 29.9302 38.8101 38.5358C38.82 39.1065 38.4912 39.629 37.9724 39.8671C33.4127 41.9593 28.3409 43.125 23.0006 43.125C17.6599 43.125 12.5876 41.9591 8.02764 39.8665C7.50886 39.6284 7.18008 39.1059 7.18991 38.5352Z"
          fill="#1B1B1B"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_81_3537">
          <Rect width={46} height={46} fill={props.fill} />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgUserMediumIcon;
