import React, { useEffect, useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import { AiFillEye, AiOutlineEye, AiOutlineFieldTime } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import postsApi from '../../api/postsApi'

const DetailPost = () => {
    const id = useParams().id
    const [dataPost, setDataPost] = useState({
        id: "",
        title: "",
        thumbnail: "",
        content: "",
        created_at: "",
    })

    useEffect(() => {
        postsApi.get(id)
            .then(response => {
                setDataPost({
                    ...response.data.data,
                    created_at: new Date(response.data.data.created_at)
                })
            })
    }, [])

    const showDateTime = (datetime) => {
        datetime = new Date(datetime)
        return ""
            + datetime.getHours() + ":"
            + datetime.getMinutes() + ":"
            + datetime.getSeconds() + ", ngày "
            + datetime.getDate() + "/"
            + (datetime.getMonth() + 1) + "/"
            + datetime.getFullYear()
    }

    return (
        <Row>
            <Col xs={12} sm={9}>
                <Card>
                    <Card.Header className="text-center">
                        <Card.Title>
                            {dataPost.title}
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <BsPersonCircle className="me-3" /> Đăng bởi: Admin
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <AiOutlineEye className="me-3" /> Lượt truy cập: Chức năng đang cập nhật
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <AiOutlineFieldTime className="me-3" /> Đăng vào lúc: {showDateTime(dataPost.created_at)}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <div dangerouslySetInnerHTML={{ __html: dataPost.content }} />
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={12} sm={3}>
                <Card>
                    <Card.Header className="bg-gradient">
                        <Card.Title className="text-white">
                            Bài Viết Liên Quan
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                            <ListGroup.Item>
                                .
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default DetailPost