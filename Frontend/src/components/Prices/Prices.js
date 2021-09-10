import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { PricesExplainText } from '../index';
import '../../styles/Prices.css';
import { useHistory } from 'react-router-dom';
import { Translator } from '../index';


export const Prices = () => {
    const history = useHistory();

    const handleSubmit = () => {
        history.push('/contactus');
    }
    return(
        <div className="pricingContainer"><PricingTable  highlightColor='#157A49'>
        <PricingSlot onClick={handleSubmit} buttonText={Translator('ELÉRHETŐSÉG','CONTACT US')} title={Translator('Elő-, Utószezon','Low-season')} priceText={Translator('01.01-05.31ig és 08.31-12.31ig','between 01.01-31.05 and 31.08-31.12')}>
            <PricingDetail> <b>{Translator('Hétköznapok','Weekdays')}</b> {Translator('4500 HUF/fő/éj','4500 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Hétvégék','Weekends')}</b> {Translator('5000 HUF/fő/éj','5000 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétköznap','Entire house on weekdays')}</b> {Translator('70000 HUF/éj (Akár 18 férőhely)','70000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétvégén','Entire house on weekends')}</b> {Translator('80000 HUF/éj (Akár 18 férőhely)','80000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('25% Árengedmény','25% Discount')}</b> {Translator('Több mint 7 éjszakás tartózkodásnál','Over 7 nights stay')}</PricingDetail>
            <PricingDetail> <b>{Translator('30% Árengedmény','30% Discount')}</b> {Translator('10 év alatti gyermekeknek','For children under 10 years of age')}</PricingDetail>
        </PricingSlot>
        <PricingSlot onClick={handleSubmit} buttonText={Translator('ELÉRHETŐSÉG','CONTACT US')} title={Translator('Közép szezon','Mid-season')} priceText={Translator('06.01-07.10ig','between 01.06-10.07')}>
            <PricingDetail> <b>{Translator('Hétköznapok','Weekdays')}</b> {Translator('6000 HUF/fő/éj','6000 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Hétvégék','Weekends')}</b>  {Translator('7000 HUF/fő/éj','7000 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétköznap','Entire house on weekdays')}</b> {Translator('85000 HUF/éj (Akár 18 férőhely)','85000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétvégén','Entire house on weekends')}</b> {Translator('105000 HUF/éj (Akár 18 férőhely)','105000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('25% Árengedmény','25% Discount')}</b> {Translator('Több mint 7 éjszakás tartózkodásnál','Over 7 nights stay')}</PricingDetail>
            <PricingDetail> <b>{Translator('30% Árengedmény','30% Discount')}</b> {Translator('10 év alatti gyermekeknek','For children under 10 years of age')}</PricingDetail>
        </PricingSlot>
        <PricingSlot highlighted onClick={handleSubmit} buttonText={Translator('ELÉRHETŐSÉG','CONTACT US')} title={Translator('Főszezon','High-season')} priceText={Translator('07.10-08.31ig','between 10.07-31.08') }>
            <PricingDetail> <b>{Translator('Hétköznapok','Weekdays')}</b> {Translator('7500 HUF/fő/éj','7500 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Hétvégék','Weekends')}</b> {Translator('8500 HUF/fő/éj','8500 HUF/Person/Night')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétköznap','Entire house on weekdays')}</b> {Translator('100000 HUF/éj (Akár 18 férőhely)','100000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('Teljes ház hétvégén','Entire house on weekends')}</b> {Translator('120000 HUF/éj (Akár 18 férőhely)','120000 HUF/Night (Up to 18 Person)')}</PricingDetail>
            <PricingDetail> <b>{Translator('25% Árengedmény','25% Discount')}</b> {Translator('Több mint 7 éjszakás tartózkodásnál','Over 7 nights stay')}</PricingDetail>
            <PricingDetail> <b>{Translator('30% Árengedmény','30% Discount')}</b> {Translator('10 év alatti gyermekeknek','For children under 10 years of age')}</PricingDetail>
        </PricingSlot>
    </PricingTable>
    <PricesExplainText />
    </div>
    )
}