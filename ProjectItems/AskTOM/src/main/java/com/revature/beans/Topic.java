package com.revature.beans;

public class Topic {
	
	Integer id;
	String name;
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
