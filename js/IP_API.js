
// 自用qx标题显示脚本，从KOP-XIAO修改

// usage:  geo_location_checker=http://ip-api.com/json/?fields=21753855&lang=zh-CN, https://raw.githubusercontent.com/Cool7Smile/QxConfig/main/js/IP_API.js

// original Shawn's:  https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/IP_API.js


if ($response.statusCode !== 200) {
  $done(null);
}

const citytest = /[a-zA-Z]+[a-zA-Z]+/;

function placeAdder(para) {
  if (para) {
    if (citytest.test(para)) {
      return '';
    }
    return ` ${para}`;
  }
  return '';
}

function geticon(para, paraa) {
  if (para === true) {
    return `${paraa} `;
  }
  return '';
}

const flags = new Map([ ['AC', '🇦🇨'], ['AD', '🇦🇩'], ['AE', '🇦🇪'], ['AF', '🇦🇫'], ['AG', '🇦🇬'], ['AI', '🇦🇮'], ['AL', '🇦🇱'], ['AM', '🇦🇲'], ['AO', '🇦🇴'], ['AQ', '🇦🇶'], ['AR', '🇦🇷'], ['AS', '🇦🇸'], ['AT', '🇦🇹'], ['AU', '🇦🇺'], ['AW', '🇦🇼'], ['AX', '🇦🇽'], ['AZ', '🇦🇿'], ['BA', '🇧🇦'], ['BB', '🇧🇧'], ['BD', '🇧🇩'], ['BE', '🇧🇪'], ['BF', '🇧🇫'], ['BG', '🇧🇬'], ['BH', '🇧🇭'], ['BI', '🇧🇮'], ['BJ', '🇧🇯'], ['BM', '🇧🇲'], ['BN', '🇧🇳'], ['BO', '🇧🇴'], ['BR', '🇧🇷'], ['BS', '🇧🇸'], ['BT', '🇧🇹'], ['BV', '🇧🇻'], ['BW', '🇧🇼'], ['BY', '🇧🇾'], ['BZ', '🇧🇿'], ['CA', '🇨🇦'], ['CD', '🇨🇩'], ['CF', '🇨🇫'], ['CG', '🇨🇬'], ['CH', '🇨🇭'], ['CI', '🇨🇮'], ['CK', '🇨🇰'], ['CL', '🇨🇱'], ['CM', '🇨🇲'], ['CN', '🇨🇳'], ['CO', '🇨🇴'], ['CP', '🇨🇵'], ['CR', '🇨🇷'], ['CU', '🇨🇺'], ['CV', '🇨🇻'], ['CW', '🇨🇼'], ['CX', '🇨🇽'], ['CY', '🇨🇾'], ['CZ', '🇨🇿'], ['DE', '🇩🇪'], ['DG', '🇩🇬'], ['DJ', '🇩🇯'], ['DK', '🇩🇰'], ['DM', '🇩🇲'], ['DO', '🇩🇴'], ['DZ', '🇩🇿'], ['EA', '🇪🇦'], ['EC', '🇪🇨'], ['EE', '🇪🇪'], ['EG', '🇪🇬'], ['EH', '🇪🇭'], ['ER', '🇪🇷'], ['ES', '🇪🇸'], ['ET', '🇪🇹'], ['EU', '🇪🇺'], ['FI', '🇫🇮'], ['FJ', '🇫🇯'], ['FK', '🇫🇰'], ['FM', '🇫🇲'], ['FO', '🇫🇴'], ['FR', '🇫🇷'], ['GA', '🇬🇦'], ['GB', '🇬🇧'], ['GD', '🇬🇩'], ['GE', '🇬🇪'], ['GF', '🇬🇫'], ['GH', '🇬🇭'], ['GI', '🇬🇮'], ['GL', '🇬🇱'], ['GM', '🇬🇲'], ['GN', '🇬🇳'], ['GP', '🇬🇵'], ['GR', '🇬🇷'], ['GT', '🇬🇹'], ['GU', '🇬🇺'], ['GW', '🇬🇼'], ['GY', '🇬🇾'], ['HK', '🇭🇰'], ['HN', '🇭🇳'], ['HR', '🇭🇷'], ['HT', '🇭🇹'], ['HU', '🇭🇺'], ['ID', '🇮🇩'], ['IE', '🇮🇪'], ['IL', '🇮🇱'], ['IM', '🇮🇲'], ['IN', '🇮🇳'], ['IR', '🇮🇷'], ['IS', '🇮🇸'], ['IT', '🇮🇹'], ['JM', '🇯🇲'], ['JO', '🇯🇴'], ['JP', '🇯🇵'], ['KE', '🇰🇪'], ['KG', '🇰🇬'], ['KH', '🇰🇭'], ['KI', '🇰🇮'], ['KM', '🇰🇲'], ['KN', '🇰🇳'], ['KP', '🇰🇵'], ['KR', '🇰🇷'], ['KW', '🇰🇼'], ['KY', '🇰🇾'], ['KZ', '🇰🇿'], ['LA', '🇱🇦'], ['LB', '🇱🇧'], ['LC', '🇱🇨'], ['LI', '🇱🇮'], ['LK', '🇱🇰'], ['LR', '🇱🇷'], ['LS', '🇱🇸'], ['LT', '🇱🇹'], ['LU', '🇱🇺'], ['LV', '🇱🇻'], ['LY', '🇱🇾'], ['MA', '🇲🇦'], ['MC', '🇲🇨'], ['MD', '🇲🇩'], ['MG', '🇲🇬'], ['MH', '🇲🇭'], ['MK', '🇲🇰'], ['ML', '🇲🇱'], ['MM', '🇲🇲'], ['MN', '🇲🇳'], ['MO', '🇲🇴'], ['MP', '🇲🇵'], ['MQ', '🇲🇶'], ['MR', '🇲🇷'], ['MS', '🇲🇸'], ['MT', '🇲🇹'], ['MU', '🇲🇺'], ['MV', '🇲🇻'], ['MW', '🇲🇼'], ['MX', '🇲🇽'], ['MY', '🇲🇾'], ['MZ', '🇲🇿'], ['NA', '🇳🇦'], ['NC', '🇳🇨'], ['NE', '🇳🇪'], ['NF', '🇳🇫'], ['NG', '🇳🇬'], ['NI', '🇳🇮'], ['NL', '🇳🇱'], ['NO', '🇳🇴'], ['NP', '🇳🇵'], ['NR', '🇳🇷'], ['NZ', '🇳🇿'], ['OM', '🇴🇲'], ['PA', '🇵🇦'], ['PE', '🇵🇪'], ['PF', '🇵🇫'], ['PG', '🇵🇬'], ['PH', '🇵🇭'], ['PK', '🇵🇰'], ['PL', '🇵🇱'], ['PM', '🇵🇲'], ['PR', '🇵🇷'], ['PS', '🇵🇸'], ['PT', '🇵🇹'], ['PW', '🇵🇼'], ['PY', '🇵🇾'], ['QA', '🇶🇦'], ['RE', '🇷🇪'], ['RO', '🇷🇴'], ['RS', '🇷🇸'], ['RU', '🇷🇺'], ['RW', '🇷🇼'], ['SA', '🇸🇦'], ['SB', '🇸🇧'], ['SC', '🇸🇨'], ['SD', '🇸🇩'], ['SE', '🇸🇪'], ['SG', '🇸🇬'], ['SI', '🇸🇮'], ['SK', '🇸🇰'], ['SL', '🇸🇱'], ['SM', '🇸🇲'], ['SN', '🇸🇳'], ['SR', '🇸🇷'], ['ST', '🇸🇹'], ['SV', '🇸🇻'], ['SY', '🇸🇾'], ['SZ', '🇸🇿'], ['TC', '🇹🇨'], ['TD', '🇹🇩'], ['TG', '🇹🇬'], ['TH', '🇹🇭'], ['TJ', '🇹🇯'], ['TL', '🇹🇱'], ['TM', '🇹🇲'], ['TN', '🇹🇳'], ['TO', '🇹🇴'], ['TR', '🇹🇷'], ['TT', '🇹🇹'], ['TV', '🇹🇻'], ['TW', '🇨🇳'], ['TZ', '🇹🇿'], ['UA', '🇺🇦'], ['UG', '🇺🇬'], ['UK', '🇬🇧'], ['UM', '🇺🇲'], ['US', '🇺🇸'], ['UY', '🇺🇾'], ['UZ', '🇺🇿'], ['VA', '🇻🇦'], ['VC', '🇻🇨'], ['VE', '🇻🇪'], ['VG', '🇻🇬'], ['VI', '🇻🇮'], ['VN', '🇻🇳'], ['VU', '🇻🇺'], ['WS', '🇼🇸'], ['YE', '🇾🇪'], ['YT', '🇾🇹'], ['ZA', '🇿🇦'], ['ZM', '🇿🇲'], ['ZW', '🇿🇼'],]);

const { body } = $response;
const obj = JSON.parse(body);
const title = `${flags.get(obj.countryCode)} ${placeAdder(obj.country)} ${placeAdder(obj.city)}`;
const subtitle = `${geticon(obj.proxy, '⚠︎') + geticon(obj.hosting, '🅗') + obj.isp}  ➤  ${obj.query}`;
const ip = obj.query;
const description = `${'\n' + '位置 ['}${placeAdder(obj.country)}${placeAdder(obj.regionName)}${placeAdder(obj.city)}${placeAdder(obj.district)}]\n\n` + `IP [${obj.query}]\n\n` + `ISP [${obj.isp}]\n\n` + `ORG [${obj.org}]\n\n` + `ASN [${obj.as.replace(/ .*$/gi, '')}]\n\n` + `时区 [${obj.timezone}]\n\n` + `邮编 [${obj.zip}]\n\n` + '定位 [' + ` 纬度 ${obj.lat},` + `经度 ${obj.lon} ]`;

$done({ title, subtitle, ip, description,});
