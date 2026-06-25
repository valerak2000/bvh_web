import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MoreIcon from '@mui/icons-material/More';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const news = [
    /*{
        key: '1',
        date: '31.12.2089',
        picture: '/static/images/water-glass-and-faucet.png',
        title: 'Тестовая новость1',
        text: 'Содержание тестовой новости1',
    },
    {
        key: '2',
        date: '31.12.2091',
        picture: '/static/images/main_office1.webp',
        title: 'Длинная Тестовая новость2',
        text: 'Содержание длинной тестовой новости2<br />\
        Последствия разгрома группы боевиков "Ансар-аль-Тавад" в Северной Хаме.\
        Боевики в рамках спорадических боевых действий идущих по периметру Эль-Латаминского выступа попытались прощупать оборону сирийских войск.\
        По заявлениям боевиков, группа "Ансар-аль-Тавад" напала на один из блокпостов САА, в результате чего сирийцы потеряли от 18 до 40 убитыми и ранеными.\
        Сирийцы заявляют, что боевики преувеличивают их потери - пока что опубликовано 8 фотографий погибших сирийских военных и список из 16 погибших. Также показано 8 трупов убитых боевиков, которые были неплохо упакованы.\
        По итогам утреннего замеса, сирийская 122-152мм ствольная артиллерия усиленно долбила опорные пункты боевиков на Эль-Латаминском выступе. Потери противника в ходе ударов возмездия неизвестны.\
        Впрочем, существенных оперативных изменений по-прежнему нет.',
        cols: 2,
    },
    {
        key: '3',
        date: '31.12.2090',
        picture: '/static/images/main_office1.webp',
        title: 'Тестовая новость2',
        text: 'Содержание тестовой новости2',
    },
    {
        key: '4',
        date: '31.12.2092',
        picture: '/static/images/brupress_ru.png',
        title: 'Тестовая новость3',
        text: 'Содержание тестовой новости3',
    },
    {
        key: '5',
        date: '31.12.2093',
        picture: '/static/images/brupress_ru.png',
        title: 'Тестовая новость4',
        text: 'Содержание тестовой новости4',
    },*/
];

function ListNews(props) {
    const theme = useTheme();
    const listItems = props.items.map((item, index) => {
        if (!props.expanded.some(menu => menu.key === item.key))
            props.expanded.push({ key: item.key, open: false });

        let selectedItem = props.expanded.filter(menu => menu.key === item.key)[0];
        let open = selectedItem !== undefined && selectedItem.open !== undefined ? selectedItem.open : false;

        return (
            <ImageListItem key = { index } cols = { item.cols || 1 }>
                <img src = { item.picture } alt = { item.title } />
                <ImageListItemBar
                    title = { `${ item.title }` }
                    titlePosition = 'bottom'
                    subtitle = { <span>{ item.date }</span> }
                    actionIcon = {
                        <IconButton size="large">
                            <MoreIcon />
                        </IconButton>
                    }
                    actionPosition = 'right'
                    onClick = { (e) => props.onClick(item.key, e) }
                    sx = {{
                        height: '3rem',
                        background:
                            'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)',
                        '& .MuiImageListItemBar-actionIcon': {
                            color: 'white',
                        },
                    }}
                />
            </ImageListItem>
        );
    });

    return (
        <React.Fragment key = 'News'>
            { props.items.length > 0 ? (
                <div sx = {{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background.paper,
                }}>
                    <ImageList
                        cols = { 3 }
                        cellHeight = { 180 }
                        sx = {{
                            width: 950,
                            transform: 'translateZ(0)',
                        }}
                    >
                        { listItems }
                    </ImageList>
                </div>
            ) : (
                <Typography
                    variant = 'body1'
                    color = 'textSecondary'
                    sx = {{
                        margin: 'auto auto auto 2rem',
                    }}
                >
                    Новостей нет.
                </Typography>
            )}
        </React.Fragment>
    );
}

function NewsView(props) {
    const theme = useTheme();
    const { card } = theme.app;
    const [expanded, setExpanded] = React.useState(null);

    const handleNewsClick = (key, e ) => {
        console.log(key);
    };

    React.useEffect(() => {
        if (expanded === null) {
            setExpanded([{ key: news.length > 0 ? news[0].key : '', open: false }]);
        }
    }, [expanded]);

    return (
        <Card
            square = { true }
            sx = { card }
        >
            <CardHeader
                title = 'Новости'
                { ...props }
            />
            <CardContent
                sx = { card.text }
            >
                <ListNews
                    items = { news }
                    onClick = { handleNewsClick }
                    expanded = { expanded || [] }
                    { ...props }
                />
            </CardContent>
        </Card>
    );
}

NewsView.propTypes = {
    theme: PropTypes.object.isRequired,
};

export default NewsView;
