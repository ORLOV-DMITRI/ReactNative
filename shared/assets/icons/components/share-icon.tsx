import Svg, {ClipPath, Defs, G, Path, Rect, SvgProps} from 'react-native-svg';
function SvgShareIcon(props: SvgProps) {
  return (
    <Svg width={28} height={28} fill="transparent" {...props}>
      <G clipPath="url(#clip0_3146_5042)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.125 7.75C17.125 6.36929 18.2443 5.25 19.625 5.25C21.0057 5.25 22.125 6.36929 22.125 7.75C22.125 9.13071 21.0057 10.25 19.625 10.25C18.9111 10.25 18.2676 9.95062 17.8126 9.47186L10.7949 13.3706C10.8472 13.5719 10.875 13.783 10.875 14C10.875 14.217 10.8472 14.4281 10.7949 14.6294L17.8126 18.5281C18.2676 18.0494 18.9111 17.75 19.625 17.75C21.0057 17.75 22.125 18.8693 22.125 20.25C22.125 21.6307 21.0057 22.75 19.625 22.75C18.2443 22.75 17.125 21.6307 17.125 20.25C17.125 20.033 17.1528 19.8219 17.2051 19.6206L10.1874 15.7219C9.73237 16.2006 9.08889 16.5 8.375 16.5C6.99429 16.5 5.875 15.3807 5.875 14C5.875 12.6193 6.99429 11.5 8.375 11.5C9.08889 11.5 9.73237 11.7994 10.1874 12.2781L17.2051 8.37943C17.1528 8.17805 17.125 7.96704 17.125 7.75Z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3146_5042">
          <Rect
            width={20}
            height={20}
            fill={props.fill}
            transform="translate(4 4)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
export default SvgShareIcon;
