// font-family: Tahoma, Verdana, sans-serif;


export default() => {
    return `
    body {
        font-family: Tahoma, Verdana, sans-serif;
        font-size: 9.5pt;
      
        line-height: 1.2;
      }
      
      .document {
        width: 297mm;
      }
      
      .document__wrap {
        margin: 18.75mm 16mm 0 19.25mm;
      }
      
      .data-table td{
        border: 1px solid black; 
      }
      
      .data-table__sp {
        display: inline-block;
        padding-top: 0.75mm;
      }
      
      .result-table td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
      }
      
      .result-table {
        margin-bottom: 3.25mm;
      }
      
      .left {
        text-align: left;
      }
      
      .right {
        text-align: right;
      }
      
      .prod-cell span {
        display: inline-block;
        padding: 1mm;
      }
      
      .declarant {
        width: 100%;
      }
    `
}