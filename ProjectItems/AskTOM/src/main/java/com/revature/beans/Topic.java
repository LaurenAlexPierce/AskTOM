package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="topics")
public class Topic {

	@Id
	@Column(name="topic_id")
	@SequenceGenerator(sequenceName="topic_seq", name="topic_seq")
	@GeneratedValue(generator="topic_seq", strategy=GenerationType.SEQUENCE)
	Integer id;
	
	@Column(name="topic_name")
	String name;
	
	@OneToOne
	@JoinColumn(name="priv_id")
	Integer privId;
	
	
	public Topic() {
		super();
	}
	public Topic(Integer id, String name, Integer privId) {
		super();
		this.id = id;
		this.name = name;
		this.privId = privId;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getPrivId() {
		return privId;
	}
	public void setPrivId(Integer privId) {
		this.privId = privId;
	}
	@Override
	public String toString() {
		return "Topic [id=" + id + ", name=" + name + ", privId=" + privId + "]";
	}
	
	
}
