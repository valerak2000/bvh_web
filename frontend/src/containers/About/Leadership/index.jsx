import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import CardHeader from '../../../components/Card/CardHeaderImpl.jsx';

const avatarMan = '/static/images/avatar.png';
const avatarWoman = '/static/images/avatar_w.png';

function LeadershipView(props) {
    const theme = useTheme();
    const { card } = theme.app;

    return (
        <Card square={true} sx={card}>
            <CardHeader title="Руководство компании" {...props} />
            <CardHeader subheader="«Брюховецкое водопроводное хозяйство», ООО" {...props} />
            <ImageList
                cols={3}
                padding={1}
                cellHeight="auto"
                sx={{
                    overflowY: 'auto',
                    height: 250
                }}
            >
                <ImageListItem key={avatarMan}>
                    <img src={avatarMan} style={card.header} />
                    <ImageListItemBar
                        title="Ляшенко Александр Николаевич"
                        subtitle="Директор"
                        titlePosition="bottom"
                        actionIcon={
                            <IconButton size="large">
                                <InfoIcon />
                            </IconButton>
                        }
                        sx={{
                            '& .MuiImageListItemBar-title': {
                                color: theme.palette.primary,
                                whiteSpace: 'normal'
                            },
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                        }}
                    />
                </ImageListItem>
                <ImageListItem key={avatarWoman}>
                    <img src={avatarWoman} style={card.header} />
                    <ImageListItemBar
                        title="Романова Ольга Григорьевна"
                        subtitle="Главный бухгалтер"
                        titlePosition="bottom"
                        actionIcon={
                            <IconButton size="large">
                                <InfoIcon />
                            </IconButton>
                        }
                        sx={{
                            '& .MuiImageListItemBar-title': {
                                color: theme.palette.primary,
                                whiteSpace: 'normal'
                            },
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
                        }}
                    />
                </ImageListItem>
            </ImageList>
            <br />
            <CardContent sx={card.text}></CardContent>
        </Card>
    );
}

LeadershipView.propTypes = {
    theme: PropTypes.object.isRequired
};

export default LeadershipView;
