import React from 'react'
import styles from "../../styles/start.module.css"

const Start = ({firstString,secondString,thirdString,fourthString,fifthString,sixthString,viewBox,author,title,counter, clicked,svgContainerRef}) => {

  return (
    <div
     id="svgContainer"
     ref={svgContainerRef}
     className={styles.container}
    >
    <h2 className={styles.title}>{title} - {author}</h2>

     <svg version="1.1"
      baseProfile="full"
      width="90%"
      id="svg"
      viewBox={viewBox}
      preserveAspectRatio="xMinYMin meet"
      onClick={clicked}
      xmlns="http://www.w3.org/2000/svg">
      <line x1="30" y1="15" x2="300" y2="15" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="30" x2="300" y2="30" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="45" x2="300" y2="45" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="60" x2="300" y2="60" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="75" x2="300" y2="75" className="string" stroke="grey" strokeWidth="1"></line>
      <line x1="30" y1="90" x2="300" y2="90" className="string" stroke="grey" strokeWidth="1"></line>

      <text x="15" y="13">1</text>

      <text x="30" y="20">{firstString}</text>
      <text x="30" y="35">{secondString}</text>
      <text x="30" y="50">{thirdString}</text>
      <text x="30" y="65">{fourthString}</text>
      <text x="30" y="80">{fifthString}</text>
      <text x="30" y="95">{sixthString}</text>

     {counter > 3 &&

      <svg id="svg2">
      <text x="15" y="113">2</text>
       <line x1="30" y1="115" x2="300" y2="115" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="130" x2="300" y2="130" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="145" x2="300" y2="145" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="160" x2="300" y2="160" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="175" x2="300" y2="175" className="string2" stroke="grey" strokeWidth="1"></line>
       <line x1="30" y1="190" x2="300" y2="190" className="string2" stroke="grey" strokeWidth="1"></line>
       </svg>

     }
     {
     counter > 6 &&

       <svg id="svg3">
       <text x="15" y="213">3</text>
        <line x1="30" y1="215" x2="300" y2="215" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="230" x2="300" y2="230" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="245" x2="300" y2="245" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="260" x2="300" y2="260" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="275" x2="300" y2="275" className="string3" stroke="grey" strokeWidth="1"></line>
        <line x1="30" y1="290" x2="300" y2="290" className="string3" stroke="grey" strokeWidth="1"></line>
        </svg>

        }
        {
        counter > 9 &&

          <svg id="svg4">
          <text x="15" y="313">4</text>
           <line x1="30" y1="315" x2="300" y2="315" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="330" x2="300" y2="330" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="345" x2="300" y2="345" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="360" x2="300" y2="360" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="375" x2="300" y2="375" className="string4" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="390" x2="300" y2="390" className="string4" stroke="grey" strokeWidth="1"></line>
           </svg>

           }
        {
        counter > 12 &&

         <svg id="svg5" >
         <text x="15" y="413">5</text>
          <line x1="30" y1="415" x2="300" y2="415" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="430" x2="300" y2="430" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="445" x2="300" y2="445" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="460" x2="300" y2="460" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="475" x2="300" y2="475" className="string5" stroke="grey" strokeWidth="1"></line>
          <line x1="30" y1="490" x2="300" y2="490" className="string5" stroke="grey" strokeWidth="1"></line>
          </svg>

          }
         {
         counter > 15 &&

          <svg id="svg6">
          <text x="15" y="513">6</text>
           <line x1="30" y1="515" x2="300" y2="515" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="530" x2="300" y2="530" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="545" x2="300" y2="545" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="560" x2="300" y2="560" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="575" x2="300" y2="575" className="string6" stroke="grey" strokeWidth="1"></line>
           <line x1="30" y1="590" x2="300" y2="590" className="string6" stroke="grey" strokeWidth="1"></line>
           </svg>

           }
           {
           counter > 18 &&

            <svg id="svg7">
            <text x="15" y="613">7</text>
             <line x1="30" y1="615" x2="300" y2="615" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="630" x2="300" y2="630" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="645" x2="300" y2="645" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="660" x2="300" y2="660" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="675" x2="300" y2="675" className="string7" stroke="grey" strokeWidth="1"></line>
             <line x1="30" y1="690" x2="300" y2="690" className="string7" stroke="grey" strokeWidth="1"></line>
             </svg>

             }
             {
             counter > 21 &&

              <svg id="svg8">
              <text x="15" y="713">8</text>
               <line x1="30" y1="715" x2="300" y2="715" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="730" x2="300" y2="730" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="745" x2="300" y2="745" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="760" x2="300" y2="760" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="775" x2="300" y2="775" className="string8" stroke="grey" strokeWidth="1"></line>
               <line x1="30" y1="790" x2="300" y2="790" className="string8" stroke="grey" strokeWidth="1"></line>
               </svg>

               }
               {
               counter > 24 &&

                <svg id="svg9">
                <text x="15" y="813">9</text>
                 <line x1="30" y1="815" x2="300" y2="815" className="string9" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="830" x2="300" y2="830" className="string9" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="845" x2="300" y2="845" className="string9" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="860" x2="300" y2="860" className="string9" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="875" x2="300" y2="875" className="string9" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="890" x2="300" y2="890" className="string9" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 27 &&

                <svg id="svg10">
                <text x="15" y="913">10</text>
                 <line x1="30" y1="915" x2="300" y2="915" className="string10" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="930" x2="300" y2="930" className="string10" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="945" x2="300" y2="945" className="string10" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="960" x2="300" y2="960" className="string10" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="975" x2="300" y2="975" className="string10" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="990" x2="300" y2="990" className="string10" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 30 &&

                <svg id="svg11">
                <text x="15" y="1013">11</text>
                 <line x1="30" y1="1015" x2="300" y2="1015" className="string11" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1030" x2="300" y2="1030" className="string11" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1045" x2="300" y2="1045" className="string11" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1060" x2="300" y2="1060" className="string11" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1075" x2="300" y2="1075" className="string11" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1090" x2="300" y2="1090" className="string11" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 33 &&

                <svg id="svg12">
                <text x="15" y="1113">12</text>
                 <line x1="30" y1="1115" x2="300" y2="1115" className="string12" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1130" x2="300" y2="1130" className="string12" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1145" x2="300" y2="1145" className="string12" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1160" x2="300" y2="1160" className="string12" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1175" x2="300" y2="1175" className="string12" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1190" x2="300" y2="1190" className="string12" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 36 &&

                <svg id="svg13">
                <text x="15" y="1213">13</text>
                 <line x1="30" y1="1215" x2="300" y2="1215" className="string13" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1230" x2="300" y2="1230" className="string13" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1245" x2="300" y2="1245" className="string13" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1260" x2="300" y2="1260" className="string13" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1275" x2="300" y2="1275" className="string13" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1290" x2="300" y2="1290" className="string13" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }


               {
               counter > 39 &&

                <svg id="svg14">
                <text x="15" y="1313">14</text>
                 <line x1="30" y1="1315" x2="300" y2="1315" className="string14" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1330" x2="300" y2="1330" className="string14" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1345" x2="300" y2="1345" className="string14" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1360" x2="300" y2="1360" className="string14" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1375" x2="300" y2="1375" className="string14" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1390" x2="300" y2="1390" className="string14" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 42 &&

                <svg id="svg15">
                <text x="15" y="1413">15</text>
                 <line x1="30" y1="1415" x2="300" y2="1415" className="string15" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1430" x2="300" y2="1430" className="string15" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1445" x2="300" y2="1445" className="string15" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1460" x2="300" y2="1460" className="string15" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1475" x2="300" y2="1475" className="string15" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1490" x2="300" y2="1490" className="string15" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 45 &&

                <svg id="svg16">
                <text x="15" y="1513">16</text>
                 <line x1="30" y1="1515" x2="300" y2="1515" className="string16" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1530" x2="300" y2="1530" className="string16" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1545" x2="300" y2="1545" className="string16" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1560" x2="300" y2="1560" className="string16" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1575" x2="300" y2="1575" className="string16" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1590" x2="300" y2="1590" className="string16" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 48 &&

                <svg id="svg17">
                <text x="15" y="1613">17</text>
                 <line x1="30" y1="1615" x2="300" y2="1615" className="string17" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1630" x2="300" y2="1630" className="string17" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1645" x2="300" y2="1645" className="string17" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1660" x2="300" y2="1660" className="string17" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1675" x2="300" y2="1675" className="string17" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1690" x2="300" y2="1690" className="string17" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 51 &&

                <svg id="svg18">
                <text x="15" y="1713">18</text>
                 <line x1="30" y1="1715" x2="300" y2="1715" className="string18" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1730" x2="300" y2="1730" className="string18" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1745" x2="300" y2="1745" className="string18" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1760" x2="300" y2="1760" className="string18" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1775" x2="300" y2="1775" className="string18" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1790" x2="300" y2="1790" className="string18" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 54 &&

                <svg id="svg19">
                <text x="15" y="1813">19</text>
                 <line x1="30" y1="1815" x2="300" y2="1815" className="string19" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1830" x2="300" y2="1830" className="string19" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1845" x2="300" y2="1845" className="string19" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1860" x2="300" y2="1860" className="string19" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1875" x2="300" y2="1875" className="string19" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1890" x2="300" y2="1890" className="string19" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 57 &&

                <svg id="svg20">
                <text x="15" y="1913">20</text>
                 <line x1="30" y1="1915" x2="300" y2="1915" className="string20" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1930" x2="300" y2="1930" className="string20" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1945" x2="300" y2="1945" className="string20" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1960" x2="300" y2="1960" className="string20" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1975" x2="300" y2="1975" className="string20" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="1990" x2="300" y2="1990" className="string20" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 60 &&

                <svg id="svg21">
                <text x="15" y="2013">21</text>
                 <line x1="30" y1="2015" x2="300" y2="2015" className="string21" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2030" x2="300" y2="2030" className="string21" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2045" x2="300" y2="2045" className="string21" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2060" x2="300" y2="2060" className="string21" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2075" x2="300" y2="2075" className="string21" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2090" x2="300" y2="2090" className="string21" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 63 &&

                <svg id="svg22">
                <text x="15" y="2113">22</text>
                 <line x1="30" y1="2115" x2="300" y2="2115" className="string22" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2130" x2="300" y2="2130" className="string22" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2145" x2="300" y2="2145" className="string22" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2160" x2="300" y2="2160" className="string22" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2175" x2="300" y2="2175" className="string22" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2190" x2="300" y2="2190" className="string22" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 66 &&

                <svg id="svg23">
                <text x="15" y="2213">23</text>
                 <line x1="30" y1="2215" x2="300" y2="2215" className="string23" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2230" x2="300" y2="2230" className="string23" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2245" x2="300" y2="2245" className="string23" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2260" x2="300" y2="2260" className="string23" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2275" x2="300" y2="2275" className="string23" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2290" x2="300" y2="2290" className="string23" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 69 &&

                <svg id="svg24">
                <text x="15" y="2313">24</text>
                 <line x1="30" y1="2315" x2="300" y2="2315" className="string24" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2330" x2="300" y2="2330" className="string24" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2345" x2="300" y2="2345" className="string24" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2360" x2="300" y2="2360" className="string24" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2375" x2="300" y2="2375" className="string24" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2390" x2="300" y2="2390" className="string24" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 72 &&

                <svg id="svg25">
                <text x="15" y="2413">25</text>
                 <line x1="30" y1="2415" x2="300" y2="2415" className="string25" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2430" x2="300" y2="2430" className="string25" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2445" x2="300" y2="2445" className="string25" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2460" x2="300" y2="2460" className="string25" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2475" x2="300" y2="2475" className="string25" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2490" x2="300" y2="2490" className="string25" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 75 &&

                <svg id="svg26">
                <text x="15" y="2513">26</text>
                 <line x1="30" y1="2515" x2="300" y2="2515" className="string26" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2530" x2="300" y2="2530" className="string26" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2545" x2="300" y2="2545" className="string26" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2560" x2="300" y2="2560" className="string26" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2575" x2="300" y2="2575" className="string26" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2590" x2="300" y2="2590" className="string26" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }
               {
               counter > 78 &&

                <svg id="svg27">
                <text x="15" y="2613">27</text>
                 <line x1="30" y1="2615" x2="300" y2="2615" className="string27" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2630" x2="300" y2="2630" className="string27" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2645" x2="300" y2="2645" className="string27" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2660" x2="300" y2="2660" className="string27" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2675" x2="300" y2="2675" className="string27" stroke="grey" strokeWidth="1"></line>
                 <line x1="30" y1="2690" x2="300" y2="2690" className="string27" stroke="grey" strokeWidth="1"></line>
                 </svg>

               }

             </svg>
    </div>
  )
}

export default Start

//<line x1="300" y1="15" x2="300" y2="90" stroke="grey" strokeWidth="2"></line> agregar

/*<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>
<div className={styles.string}></div><div className={styles.stringInline}></div>*/
