/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { Phone } from "lucide-react";
import { useEffect } from "react";
export default function CalModalButton({children,text='book an appointment'}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <div data-cal-namespace="30min" className="text-brand-white w-full flex font-normal text-button ls-05"
    data-cal-link="memet-oumar-kvgrgr/30min"
    
    data-cal-config='{"layout":"month_view"}'
  >
    {children}
    </div>;
};
  