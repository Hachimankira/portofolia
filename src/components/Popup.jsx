import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, IconButton, autocompleteClasses } from '@mui/material';
import Works from './homepage/works';
import INFO from '../data/user';
import Statics from './Statics';
import { CloseOutlined } from '@mui/icons-material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Education from '../data/Education';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import EducationCard from '../data/Education/Components/EducationCard';

export default function ScrollDialog() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button onClick={handleClickOpen('paper')}>Show more</Button>
            <Dialog
                open={open}
                maxWidth={50}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className="customDialog"
            >
                <div className='gridContainer'>
                    <DialogTitle id="scroll-dialog-title">
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>More About me </div>
                            <div>
                                <IconButton onClick={handleClose}>
                                    <CloseOutlined />
                                </IconButton>
                            </div>
                        </div></DialogTitle>

                    <DialogContent dividers={scroll === 'paper'}>

                        <Grid container rowSpacing={8} columnSpacing={{ xs: 5, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <h2>{INFO.main.name}</h2>
                                <p>{INFO.main.title}</p>
                                <div className='mt-5' style={{ display: 'flex', flexDirection: 'row' }}>
                                    <div className='mr-20' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <LocalPhoneIcon />
                                        <div style={{ paddingLeft: '16px' }}>
                                            <p>9851185981</p>
                                            <p>9851185981</p>
                                        </div>
                                    </div>

                                    <div className='mr-20' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <EmailIcon />
                                        <div style={{ paddingLeft: '16px' }}>
                                            <p>Sabin.sth444@gmail.com</p>
                                            <p>Sabin.sth444@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className='mr-20' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <LocationOnIcon />
                                        <div style={{ paddingLeft: '16px' }}>
                                            <p>Chunikhel,Budhanilkhanta</p>
                                            <p>Kathmandu,Nepal</p>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <h2>Achivement</h2>
                                <Statics />
                            </Grid>

                            <Grid item xs={6}>
                                <h2>Experience</h2>
                                <Works />
                            </Grid>
                            <Grid item xs={6}>
                                <h2>Education</h2>
                                <div className="mt-5 p-2 flex-fill border border-secondary-subtle rounded-lg border-opacity-50 border-3 rounded-3 p-3">
                                    <div className=' border-bottom gap-4' style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f7f7f7' }}>
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                        <h3>Education</h3>
                                    </div>
                                    <div className='d-flex ' style={{ display: 'flex', flexDirection: 'column' }}>
                                        {
                                            INFO.education.map((data => {
                                                return (
                                                    <EducationCard data={data} name={data.name} />
                                                )
                                            }))
                                        }

                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </DialogContent>
                </div>
            </Dialog>
        </div>

    );
}