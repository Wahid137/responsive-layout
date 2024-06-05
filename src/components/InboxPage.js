import React from "react";
import {
  Container,
  Grid,
  Menu,
  Segment,
  Icon,
  Header,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "../App.css";

const InboxPage = () => {
  return (
    <Container fluid>
      <Header as="h1" textAlign="center" style={{ margin: "20px 0" }}>
        <Icon name="layout" />
        Responsive Layout Design
      </Header>
      <Grid divided padded>
        {/* Sidebar */}
        <Grid.Column width={3} className="sidebar">
          <Menu vertical fluid>
            <Menu.Item name="compose">
              <Icon name="edit" /> Compose New
            </Menu.Item>
            <Menu.Item name="inbox">
              <Icon name="inbox" /> Inbox
              <Menu.Menu>
                <Menu.Item name="allInbox">
                  <Icon name="mail" /> All Inbox
                </Menu.Item>
                <Menu.Item name="unassigned">
                  <Icon name="user outline" /> Unassigned
                </Menu.Item>
                <Menu.Item name="assigned">
                  <Icon name="user" /> Assigned to me
                </Menu.Item>
                <Menu.Item name="mentions">
                  <Icon name="at" /> Mention
                </Menu.Item>
                <Menu.Item name="offline">
                  <Icon name="wifi" /> Offline
                </Menu.Item>
                <Menu.Item name="following">
                  <Icon name="eye" /> Following
                </Menu.Item>
                <Menu.Item name="overdue">
                  <Icon name="clock" /> Overdue
                </Menu.Item>
                <Menu.Item name="starred">
                  <Icon name="star" /> Starred
                </Menu.Item>
                <Menu.Item name="important">
                  <Icon name="exclamation triangle" /> Important
                </Menu.Item>

                <Menu.Item name="drafts">
                  <Icon name="file alternate outline" /> Drafts
                </Menu.Item>
                <Menu.Item name="scheduled">
                  <Icon name="calendar alternate outline" /> Scheduled
                </Menu.Item>
                <Menu.Item name="outbox">
                  <Icon name="upload" /> Outbox
                </Menu.Item>
                <Menu.Item name="archive">
                  <Icon name="archive" /> Archive
                </Menu.Item>
                <Menu.Item name="trash">
                  <Icon name="trash" /> Trash
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Menu>
        </Grid.Column>

        {/* Inbox List */}
        <Grid.Column width={3} className="inbox-list">
          <div className="scrollable-menu">
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>File Attach</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
            <Menu vertical fluid>
              <Menu.Item name="message1">
                <Icon name="mail" /> Message from Wahid Ahmed
                <p>Customer Feedback</p>
              </Menu.Item>
            </Menu>
          </div>
        </Grid.Column>

        {/* Message Content */}
        <Grid.Column width={7} className="message-content">
          <div className="scrollable-menu">
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
            <Segment>
              <Header as="h3">
                <Icon name="envelope" /> Message Content
              </Header>
              <p>
                <strong>Subject:</strong> How are you!!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                velit nec lorem placerat dapibus. Praesent eget turpis vel nibh
                convallis aliquam.
              </p>

              <p>
                <Icon name="paperclip" /> Attachment:
                <a href="#"> Download</a>
              </p>
            </Segment>
          </div>
        </Grid.Column>

        {/* User Details */}
        <Grid.Column width={3} className="user-details">
          <div className="scrollable-menu">
            <Segment>
              <Header as="h4">
                <Icon name="user" /> Wahid Ahmed
              </Header>
              <p>
                <Icon name="phone" /> Phone: 01521750685
              </p>
              <p>
                <Icon name="marker" /> Location: Bangladesh
              </p>
              <p>
                <Icon name="mail" /> Email: wahid@example.com
              </p>
              <p>
                <Icon name="home" /> Address: 123 Street, Rangpur
              </p>
              <p>
                <Icon name="building" /> Company: Example Corp
              </p>
              <p>
                <Icon name="briefcase" /> Position: Software Engineer
              </p>
              <p>
                <Icon name="linkify" /> Website: www.example.com
              </p>
              <p>
                <Icon name="github" /> GitHub: github.com/wahid
              </p>
              <p>
                <Icon name="linkedin" /> LinkedIn: linkedin.com
              </p>
              <p>
                <Icon name="twitter" /> Twitter: @wahid
              </p>
              <p>
                <Icon name="calendar" /> Joined: January 2020
              </p>
              <p>
                <Icon name="globe" /> Nationality: Bangladeshi
              </p>
              <p>
                <Icon name="university" /> Education: BSc in CSE
              </p>
              <p>
                <Icon name="trophy" /> Awards: EOM
              </p>
              <p>
                <Icon name="language" /> Languages: English, Bengali
              </p>
              <p>
                <Icon name="world" /> Travels: 15 countries
              </p>
              <p>
                <Icon name="birthday" /> Birthday: January 15, 1990
              </p>
              <p>
                <Icon name="heart" /> Interests: Coding, Music
              </p>
              <p>
                <Icon name="car" /> Vehicle: Toyota Corolla
              </p>
              <p>
                <Icon name="idea" /> Projects: 10+ projects
              </p>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default InboxPage;
