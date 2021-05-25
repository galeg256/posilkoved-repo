// font-family: Tahoma, Verdana, sans-serif;


export default() => {
    return `
    body {
        font-family: Tahoma, Verdana, sans-serif;
        font-size: 9.5pt;
        line-height: 1.2;
      }
      
      .document__wrap {
        width: 1199px;
        margin: 85px 0 0 109px;
      }
      
      .data-table td{
        border: 1px solid black; 
      }
      
      .data-table__sp {
        display: inline-block;
        padding-top: 3px;
      }
      
      .result-table td {
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        border-left: 1px solid black;
      }
      
      .result-table {
        margin-bottom: 13px;
      }
      
      .left {
        text-align: left;
      }
      
      .right {
        text-align: right;
      }
      
      .prod-cell span {
        display: inline-block;
        padding: 1px;
      }
      
      .declarant {
        width: 100%;
      }
    `
}