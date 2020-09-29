import React from 'react';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const twitters = [
    {
        tittle: 'Cwiakala',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci. Id, velit?At assumenda recusandae dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        twitterName:'cwiakala' ,
        created: '1 day',
    },
    {
        tittle: 'Boniek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, dolor sunt corporis libero ullam perspiciatis rem suscipit quod quidem, nulla, dolorum earum? Odit vero, eius accusamus numquam eaque ex eos dolore voluptatem tempora a. Ad, quo?',
        twitterName: 'BoniekZibi',
        created: '6 day',
    },
    {
        tittle: 'Borek',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint autem dignissimos a et vel veritatis, unde doloremque pariatur, fugiat officia soluta molestiae dolorum harum rerum impedit dolorem adipisci.',
        twitterName: 'BorekMati',
        created: '8 day',
    }
]


const Twitter = () => (
    <GridTemplate pageType='twitter'> 
    {twitters.map(({tittle, content, twitterName, created}) => 
    <Card 
    cardType='twitter'
    tittle={tittle}
    content={content}
    twitterName={twitterName}
    created={created}
    key={tittle}
    />
    )}
    </GridTemplate>
   
);

export default Twitter;