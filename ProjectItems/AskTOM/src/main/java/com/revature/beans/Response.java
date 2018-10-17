package com.revature.beans;

public class Response {
	Integer id;
	String content;
	Integer votes;
	Integer topicId;
	Integer userId;
	
	
	public Response() {
		super();
	}
	public Response(Integer id, String content, Integer votes, Integer topicId, Integer userId) {
		super();
		this.id = id;
		this.content = content;
		this.votes = votes;
		this.topicId = topicId;
		this.userId = userId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Integer getVotes() {
		return votes;
	}
	public void setVotes(Integer votes) {
		this.votes = votes;
	}
	public Integer getTopicId() {
		return topicId;
	}
	public void setTopicId(Integer topicId) {
		this.topicId = topicId;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	@Override
	public String toString() {
		return "Response [id=" + id + ", content=" + content + ", votes=" + votes + ", topicId=" + topicId + ", userId="
				+ userId + "]";
	}
	
	
}
