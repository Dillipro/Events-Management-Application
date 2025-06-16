import { useState, useRef, useContext } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { SelectedEventContext } from "../dashboard";
import { getMonthName, getYear } from "./dateUtils";
import { getDate } from "./getDate";
import { getTargetAudience, getResourcePersons } from "./getUserDetails";

const ProposalLetter = ({ event, activePage, setActivePage }) => {
  const date = new Date();
  const { selectedEvent, setSelectedEvent } = useContext(SelectedEventContext);
  const pdfRef = useRef();

  const generatePDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210 mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // 297 mm

      const imgProps = pdf.getImageProperties(imgData);
      const imgWidth = pdfWidth;
      const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

      let heightLeft = imgHeight;
      let position = 0;

      // First page
      pdf.addImage(imgData, "PNG", 20, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;

      // Add more pages if necessary
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save("multi-page.pdf");
    });
  };

  function handleBackToProposalPage() {
    setActivePage("proposal");
  }

  return (
    <Box>
      <IconButton
        onClick={handleBackToProposalPage}
        sx={{
          m: 1,
        }}
      >
        <ArrowBackIcon></ArrowBackIcon>
      </IconButton>

      <Box>
        <Box
          ref={pdfRef}
          style={{
            width: "794px",
            padding: "20px",
            background: "#fff",
            color: "#000",
            margin: "0 auto",
            paddingTop: "100px",
            fontFamily: "Times New Roman",
          }}
          sx={{
            mt: 6,
            "& .MuiTypography-root": {
            fontSize: "18px", // or any size like "1.2rem"
    },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontFamily: "Times New Roman",
            }}
          >
            Centre : DEPARTMENT OF CSE & CENTRE FOR CYBER SECURITY <br></br>
            Letter No.: Lr. No. 1/TrainingProgramme/CSE&CCS/{date.getFullYear()}{" "}
            <br></br>
            Date: {date.toLocaleDateString()}
          </Typography>
          <br></br>
          <br></br>

          <Typography
            sx={{
              fontWeight: "600",
              fontFamily: "Times New Roman",
            }}
          >
            NOTE SUBMITTED TO THE CONVENOR COMMITTEE:
          </Typography>

          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            Sub: DCSE & CCS – Request for <b>Permission and Approval</b> to
            conduct a <b>Two-Day Online Training Programme</b> on “
            <span>{selectedEvent.title}</span>” - reg.,
          </Typography>

          <Typography
            sx={{
              pl: 26,
            }}
          >
            ******
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            The Department of Computer Science and Engineering (DCSE) and the
            Centre for Cyber Security (CCS) seek kind permission and approval to
            organize a Two-Day Online Training Programme titled “
            <b>{selectedEvent.title}</b>” in the month of{" "}
            {getMonthName(selectedEvent.startDate)},{" "}
            {getYear(selectedEvent.startDate)} [Tentative Dates:{" "}
            {getDate(selectedEvent.startDate)} and{" "}
            {getDate(selectedEvent.endDate)}] with{" "}
            {selectedEvent.createdBy.name} as coordinators.
          </Typography>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            <b>Objective:</b>
            {selectedEvent.objectives}
          </Typography>
          <br></br>
          <br></br>

          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            The Training Programme Details are as follows:
          </Typography>

          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
              textIndent: "40px",
            }}
          >
            • <b>Mode</b>{" "}
            <Box
              sx={{
                display: "inline-block",
                paddingLeft: "83px",
              }}
            >
              : {selectedEvent.mode}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
              textIndent: "40px",
            }}
          >
            • <b>Duration</b>{" "}
            <Box
              sx={{
                display: "inline-block",
                paddingLeft: "60px",
              }}
            >
              : {selectedEvent.duration}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
              textIndent: "40px",
            }}
          >
            • <b>Target Audience</b>
            <Box
              sx={{
                display: "inline-block",
                paddingLeft: "13px",
              }}
            >
              : {getTargetAudience(selectedEvent)}
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
              textIndent: "40px",
            }}
          >
            • <b>Resource Persons</b>{" "}
            <Box
              sx={{
                display: "inline-block",
              }}
            >
              : {getResourcePersons(selectedEvent)}
            </Box>
          </Typography>
          <br></br>
          <br></br>
          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            It is requested that permission may be granted to conduct the
            training programme and to host the details in the Anna University
            website. It is also requested that permission may be granted to
            collect registration fee from the participants as detailed in the
            table below. The tentative budget for the training programme is
            given in the annexure attached.
          </Typography>
          <br></br>
          <br></br>

          <table border="1px" style={{ 
            width: "630px",
            textAlign: "left",
            borderCollapse: "collapse",
            }}>
            <colgroup>
              <col style={{ width: "10%" }} />
              <col style={{ width: "50%" }} />
              <col style={{ width: "40%" }} />
            </colgroup>
            <thead>
              <tr>
                <th style={{padding: "4px"}}>Sl. No.</th>
                <th >Category </th>
                <th >Registration Fee </th>
              </tr>
            </thead>
            <tbody>
              {
                selectedEvent.registrationFees.map((item, index) => (
                  <tr key={index}>
                    <td style={{padding: "4px"}}>{index+1}.</td>
                    <td style={{padding: "4px"}}>{item.category}</td>
                    <td style={{padding: "4px"}}>Rs.{item.amount}/- + {item.gstPercentage}%GST</td>
              </tr>
                ))
              }
            </tbody>
          </table>
          <br></br>
          <br></br>
          <br></br>

          <Typography
            sx={{
              fontFamily: "Times New Roman",
              maxWidth: "650px",
            }}
          >
            Hence, it is kindly requested that permission may be given to conduct the training
            programme and the registration fees may be collected in the form of Demand Draft / Online
            payment favouring "The Director, CSRC, Anna University, Chennai".
          </Typography>

        </Box>
        <Button variant="outlined" onClick={generatePDF}>
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default ProposalLetter;
