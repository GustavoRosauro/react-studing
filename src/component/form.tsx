import React, { useEffect } from 'react';
import { useState } from 'react';
import { CourseModel } from './interfaces/courseModel';
import { listCourses } from '../memory_base/courses_memory';
import { Button, Container, Paper, Stack, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import DeleteConfirmationDialog from './deleteConfirmationDialog';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const Form: React.FC = () => {
    const [course, setCourse] = useState<CourseModel>({ name: '' })
    const [courses, setCourses] = useState<CourseModel[]>([])
    const [rowToDelete, setRowToDelete] = useState<string | null>(null)
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setCourses(listCourses)
    }, [])

    const handleClickOpen = (nome: string) =>{
        setRowToDelete(nome);
        setOpen(true);
    }

    const handleClose = () =>{
        setOpen(false);
    }
    
    const handleDelete = () =>{
        let coursesFilter = courses.filter(row => row.name !== rowToDelete);
        setCourses(coursesFilter)
        setOpen(false);
        setRemoveCourse(coursesFilter);
    }
    
    const setRemoveCourse = (coursesFilter: Array<CourseModel>) => {
        listCourses.splice(0, listCourses.length);
        coursesFilter.forEach(course => listCourses.push(course))
    }

    const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value })
    }

    const saveCourse = () => {
        listCourses.push(course)
        setCourses([...listCourses]);
        setCourse({ name: '' })
    }
    return (
        <Container >
            <Container >

                <h1>My form</h1>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    alignSelf="center"
                    spacing={1}
                    useFlexGap
                    sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                >
                    <TextField variant='outlined'
                        name='name'
                        label='course'
                        onChange={handleInputEvent}
                        value={course.name}
                        size='small'></TextField>
                    <Button variant='contained' color='success' onClick={saveCourse}>Save</Button>
                </Stack>
            </Container>
            <br></br>
            <Container >
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} size="small">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell colSpan={2}>Course</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {courses.map(c =>
                            <TableRow>
                                    <TableCell>{c.name}</TableCell >
                            <TableCell>
                                <Button color='error' onClick={() => handleClickOpen(c.name)}>remove</Button>
                                </TableCell>
                            </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
            <DeleteConfirmationDialog
                open={open}
                onClose={handleClose}
                onConfirm={handleDelete}
                />
        </Container>
    );
}

export default Form;