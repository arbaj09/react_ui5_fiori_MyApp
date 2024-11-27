import { ThemingParameters } from "@ui5/webcomponents-react-base";
import classes from './MyCustomElement.module.css'

export const MyCustomElement = () => {
  return (
    <div  className={classes.container}>
     <span style=
     {{ color: ThemingParameters.sapNegativeColor, 
     fontSize: ThemingParameters.sapFontHeader1Size }}>
  My custom Text Element
</span>
    </div>
  );
};
