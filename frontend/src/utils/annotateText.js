export default function annotateText(text = '', preview = []) {
  let html = text;
  let adj = 0;
  preview.forEach(a => {
    html = html.substr(0, a.start + adj) + '<b>' + html.substr(a.start + adj);
    adj += 3;
    html = html.substr(0, a.end + adj) + '</b>' + html.substr(a.end + adj);
    adj += 4;
  });
  return html;
}
