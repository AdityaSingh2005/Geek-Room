import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import hackathondata from "./JSON/hackathon.json";
import styles from "@/styles/event.module.scss";
import Image from "next/image";
import Link from "next/link";

const Hackathons = () => {
  // Set initial dates
  const [selectedType, setSelectedType] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null); // Allow null type
  const [endDate, setEndDate] = useState<Date | null>(new Date()); // Initialize with current date

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
  };

  const parseEventDateRange = (dateRangeString: string) => {
    const match = dateRangeString.match(
      /(\d+)\w*\s+([A-Z]+)\s*-\s*(\d+)\w*\s+([A-Z]+),\s+(\d{4})/
    );
    if (match) {
      const [_, startDay, startMonth, endDay, endMonth, year] = match;
      const startDate = new Date(`${startDay} ${startMonth} ${year}`);
      const endDate = new Date(`${endDay} ${endMonth} ${year}`);
      return { startDate, endDate };
    }
    return null;
  };

  const isWithinDateRange = (eventDateRange: string) => {
    const parsedDates = parseEventDateRange(eventDateRange);
    if (!parsedDates) return false;

    const { startDate: eventStartDate, endDate: eventEndDate } = parsedDates;
    const start = startDate ? startDate : null;
    const end = endDate ? endDate : null;

    if (start && end) {
      return eventStartDate <= end && eventEndDate >= start;
    }
    if (start) {
      return eventEndDate >= start;
    }
    if (end) {
      return eventStartDate <= end;
    }
    return true;
  };

  const filteredEvents = hackathondata.filter((detail) => {
    const matchesType = selectedType ? detail.type === selectedType : true;
    const matchesDateRange = isWithinDateRange(detail.date);
    return matchesType && matchesDateRange;
  });

  return (
    <div className={styles.event_page}>
      <div className={`${styles.event_heading} ${styles.event}`}>EVENTS</div>
      <div className={styles.event_subHeading}>
        <p>&quot;Embrace Innovation, Collaborate and Celebrate&quot;</p>
      </div>

      {/* Dropdown Filters */}
      <div className={styles.event_dropdowns}>
        <div className={styles.event_filter}>
          <label htmlFor="eventType" className={styles.label}>
            Event Type
          </label>
          <select
            id="eventType"
            className={styles.event_dropdown}
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="">All Types</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Fun">Fun</option>
            <option value="Speaker Session">Speaker Session</option>
          </select>
        </div>

        <div className={styles.event_filter}>
          <label htmlFor="startDate" className={styles.label}>
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            dateFormat="yyyy-MM-dd"
            className={styles.event_dropdown}
          />
        </div>

        <div className={styles.event_filter}>
          <label htmlFor="endDate" className={styles.label}>
            End Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            dateFormat="yyyy-MM-dd"
            className={styles.event_dropdown}
          />
        </div>
      </div>

      <div className={styles.event_card_container}>
        {filteredEvents.map((detail) => (
          <div className={styles.event_card} key={detail.id}>
            <Image
              src={detail.image_url}
              alt={detail.eventName}
              className={styles.event_card__image}
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.event_card__overlay}>
              <Link
                href={`/Hackathon/${detail.id}`}
                className={styles.event_card__button}
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathons;
