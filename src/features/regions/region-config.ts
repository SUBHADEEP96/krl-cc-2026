import himalayanGiantsLogo from '../../assets/regions/01-himalayan-giants.png';
import teraiTuskersLogo from '../../assets/regions/02-terai-tuskers.png';
import coochBeharRoyalsLogo from '../../assets/regions/03-cooch-behar-royals.png';
import dinajpurDefendersLogo from '../../assets/regions/04-dinajpur-defenders.png';
import maldaKingsLogo from '../../assets/regions/05-malda-kings.png';
import murshidabadNawabsLogo from '../../assets/regions/06-murshidabad-nawabs.png';
import nadiaWarriorsLogo from '../../assets/regions/07-nadia-warriors.png';
import bardhamanBighaKingsLogo from '../../assets/regions/08-bardhaman-bigha-kings.png';
import hooghlyHaritsLogo from '../../assets/regions/09-hooghly-harits.png';
import birbhumBlastersLogo from '../../assets/regions/10-birbhum-blasters.png';
import bankuraBullsLogo from '../../assets/regions/11-bankura-bulls.png';
import puruliaPanthersLogo from '../../assets/regions/12-purulia-panthers.png';
import medinipurMavericksLogo from '../../assets/regions/13-medinipur-mavericks.png';
import gangaGladiatorsLogo from '../../assets/regions/14-ganga-gladiators.png';
import sundarbanStrikersLogo from '../../assets/regions/15-sundarban-strikers.png';
export interface RegionDefinition {id:string;name:string;district:string;logo:string;logoAlt:string}
const defineRegion=(id:string,name:string,district:string,logo:string):RegionDefinition=>({id,name,district,logo,logoAlt:`${name} regional team logo`});
export const regionDefinitions:readonly RegionDefinition[]=[
 defineRegion('himalayan-giants','Himalayan Giants','Darjeeling',himalayanGiantsLogo),defineRegion('terai-tuskers','Terai Tuskers','Jalpaiguri',teraiTuskersLogo),defineRegion('cooch-behar-royals','Cooch Behar Royals','Cooch Behar',coochBeharRoyalsLogo),defineRegion('dinajpur-defenders','Dinajpur Defenders','Uttar Dinajpur',dinajpurDefendersLogo),defineRegion('malda-kings','Malda Kings','Malda',maldaKingsLogo),defineRegion('murshidabad-nawabs','Murshidabad Nawabs','Murshidabad',murshidabadNawabsLogo),defineRegion('nadia-warriors','Nadia Warriors','Nadia',nadiaWarriorsLogo),defineRegion('bardhaman-bigha-kings','Bardhaman Bigha Kings','Purba Bardhaman',bardhamanBighaKingsLogo),defineRegion('hooghly-harits','Hooghly Harits','Hooghly',hooghlyHaritsLogo),defineRegion('birbhum-blasters','Birbhum Blasters','Birbhum',birbhumBlastersLogo),defineRegion('bankura-bulls','Bankura Bulls','Bankura',bankuraBullsLogo),defineRegion('purulia-panthers','Purulia Panthers','Purulia',puruliaPanthersLogo),defineRegion('medinipur-mavericks','Medinipur Mavericks','Paschim Medinipur',medinipurMavericksLogo),defineRegion('ganga-gladiators','Ganga Gladiators','Howrah',gangaGladiatorsLogo),defineRegion('sundarban-strikers','Sundarban Strikers','South 24 Parganas',sundarbanStrikersLogo),
];
export const getRegionByRouteId=(id:string|undefined)=>id===undefined?undefined:regionDefinitions[Number(id)];
