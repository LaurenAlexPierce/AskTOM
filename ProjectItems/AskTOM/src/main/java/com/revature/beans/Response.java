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
	private Integer id;
	
	@Column(name="text_content")
	private String content;
	
	@Column(name="votes")
	private Integer votes;
	
	@ManyToOne
	@JoinColumn(name="topic_id")
	private Topic topicId;
	
	@ManyToOne
	@JoinColumn(name="user_id")
	private Tom userId;

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

	public Topic getTopicId() {
		return topicId;
	}

	public void setTopicId(Topic topicId) {
		this.topicId = topicId;
	}

	public Tom getUserId() {
		return userId;
	}

	public void setUserId(Tom userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Response [id=" + id + ", content=" + content + ", votes=" + votes + ", topicId=" + topicId + ", userId="
				+ userId + "]";
	}

	public Response(Integer id, String content, Integer votes, Topic topicId, Tom userId) {
		super();
		this.id = id;
		this.content = content;
		this.votes = votes;
		this.topicId = topicId;
		this.userId = userId;
	}

	public Response(String content, Integer votes, Topic topicId, Tom userId) {
		super();
		this.content = content;
		this.votes = votes;
		this.topicId = topicId;
		this.userId = userId;
	}

	public Response() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
