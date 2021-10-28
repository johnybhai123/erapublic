import React from 'react'
import { Img } from '../Strongfoundation/Strongfoundation.element'
import { Main } from './Saritabudana.element'
function Strongfoundation() {
    return (
      <Main>
        <h1 style={{ color: "green" }}>DIRECTOR’S MESSAGE </h1>
        <h5 style={{ color: "blue" }}>
          "Education is a shared commitment between dedicated teachers,
          motivated students and enthusiastic”parents with high expectations"{" "}
        </h5>
        <hr />
        <Img
          src="https://icecube-eu-400.icedrive.io/thumbnail?p=QR2IiqyoC17ZI0sSsv.u41GwpLiZ3obycN3bjKgIMaz8xEdzbdiBJTOe6kiJYV_Mj3T93xygqK7TqJhiTe8BD2JjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped"
          alt=""
        />
        <p style={{ padding: "40px 0 0 0" }}>
          At TNEPS Campus 2 our mission is to provide an outstanding education
          and inspire our students to engage in both academic and enriching
          extracurricular programmes. The uniqueness of each child is
          recognized, nurtured and treasured. Emphasis is on LEARNING and not on
          teaching. Our focus is to develop our students as global citizens,
          with tolerance respect and appreciation of diverse cultures and
          religions for a life-time learning experience. They should be
          self-motivated, independent, confident decision makers to take up a
          leadership roles in future. We at TNEPS provide holistic education
          where children evolve as individuals, who are self-motivated, and
          creative, who can think, question and reason out logically; who are
          independent, confident and leaders capable of taking decisions.
        </p>
      </Main>
    );
}

export default Strongfoundation
