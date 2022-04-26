import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";
import _ from "lodash";

const users = _.times(10).map((val) => {
  return {
    id: val,
    name: `えにゃ--${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "enya@sss.com",
    phone: "000-1234-111",
    company: {
      name: "hoge company"
    },
    website: "http://google.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
