import {useState} from 'react';
import type {RegionDefinition} from './region-config';
interface RegionLogoProps {region:RegionDefinition;size?:'sm'|'md'|'lg';priority?:boolean;className?:string}
export function RegionLogo({region,size='md',priority=false,className=''}:RegionLogoProps){const [failed,setFailed]=useState(false);const initials=region.name.split(' ').map(word=>word[0]).join('').slice(0,2);return <span className={`region-logo region-logo--${size} ${className}`.trim()}>{failed?<span className="region-logo__fallback" role="img" aria-label={`${region.logoAlt} unavailable`}>{initials}</span>:<img src={region.logo} alt={region.logoAlt} decoding="async" loading={priority?'eager':'lazy'} onError={()=>setFailed(true)}/>}</span>}
