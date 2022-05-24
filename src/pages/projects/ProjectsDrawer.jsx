import React from 'react'

import classes from './ProjectsDrawer.module.css';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// All Projects Drawer


const requestNumberText = 'Request Number';
const initiatedByText = 'Initiated By';
const initiatedDateText = 'Initiated Date';
const categoryText = 'Category';
const brandText = 'Brand';
const packSizeText = 'Pack Size';
const productNameText = 'Product Name';
const componentTypeText = 'Component Type';
const componentCodeText = 'Component Code';


const navList = ['Info', 'Files', 'Stakeholders', 'Active Log'];


const ProjectsDrawer = (props) => {

    const project = props.project;

    return (
        <div className={classes.container}>
            <div className={classes.box}>
                <div className={classes.header}>
                    <div className={classes.headerIcon}><FormatListBulletedIcon fontSize="large" className={classes.listIcon} /></div>
                </div>
                <div className={classes.headerData}>
                    <h1 className={classes.heading}>{project.product} - {project.componentType} - {project.requestNumber}</h1>
                    <nav className={classes.headerNav}>
                        <ul className={classes.navItems}>
                            {
                                navList.map((item) => {
                                    return <li key={Math.random()}>{item}</li>;
                                })
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classes.dataContainer}>
                <div className={classes.projectInfo}>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <p className={classes.title}>{requestNumberText}</p>
                            <div className={classes.value}>{project.requestNumber}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{initiatedByText}</p>
                            <div className={classes.value}>{project.initiatedBy}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{initiatedDateText}</p>
                            <div className={classes.value}>{project.initiatedDate}</div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <p className={classes.title}>{categoryText}</p>
                            <div className={classes.value}>{project.category}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{brandText}</p>
                            <div className={classes.value}>{project.category}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{productNameText}</p>
                            <div className={classes.value}>{project.product}</div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <p className={classes.title}>{packSizeText}</p>
                            <div className={classes.value}>{project.packSize}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{componentTypeText}</p>
                            <div className={classes.value}>{project.componentType}</div>
                        </div>
                        <div className={classes.item}>
                            <p className={classes.title}>{componentCodeText}</p>
                            <div className={classes.value}>{project.requestNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default ProjectsDrawer