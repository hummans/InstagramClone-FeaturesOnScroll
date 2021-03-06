import styled from "styled-components/native";

export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PostHeader = styled.View``;

export const UserInfo = styled.View`
  flex-direction: row;
`;

export const Place = styled.Text``;

export const OptionsIcon = styled.Image``;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;
export const LeftActions = styled.View`
  flex-direction: row;
`;
export const Likes = styled.Text`
  padding: 10px;
  color: #333;
  font-weight: bold;
`;

export const RightActions = styled.View``;

export const Action = styled.Image`
  margin-right: 15px;
  height: 25px;
  width: 25px;
`;
export const Hashtag = styled.Text`
  padding-left: 10px;
  color: #002d5e;
`;

export const Description = styled.Text`
  padding: 0 10px 10px 10px;
  line-height: 18px;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: "small",
  color: "#999"
})`
  margin: 30px 0;
`;
