package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="responses")
public class Response {
	
	@Id
	@Column(name="response_id")
	@SequenceGenerator(sequenceName="resp_seq", name="resp_seq")
	@GeneratedValue(generator="resp_seq", strategy=GenerationType.SEQUENCE)
	Integer id;
	
	@Column(name="text_content")
	String content;
	
	@Column(name="votes")
	Integer votes;
	
	@ManyToOne
	@JoinColumn(name="topic_id")
	Integer topicId;
	
	@ManyToOne
	@JoinColumn(name="user_id")
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
