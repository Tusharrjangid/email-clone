import React from 'react'
import {Photo,StarOutline,SendOutlined,InsertDriveFileOutlined,DeleteOutline,MailOutline} from '@mui/icons-material';

const SIDEBAR_DATA = [
    {
        name:'inbox',
        title:'Inbox',
        icon:Photo
    },
    {
        name:'starred',
        title:'Starred',
        icon:StarOutline
    },
    {
        name:'sent',
        title:'Sent',
        icon:SendOutlined
    },
    {
        name:'drafts',
        title:'Drafts',
        icon:InsertDriveFileOutlined
    },
    {
        name:'bin',
        title:'Bin',
        icon:DeleteOutline
    },
    {
        name:'allmail',
        title:'All Main',
        icon:MailOutline
    },
]

export default SIDEBAR_DATA
