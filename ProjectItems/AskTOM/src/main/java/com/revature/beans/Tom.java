package com.revature.beans;

public class Tom {

	Integer id;
	String username;
	String password;
	Integer privId;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Integer getPrivId() {
		return privId;
	}
	public void setPrivId(Integer privId) {
		this.privId = privId;
	}
	@Override
	public String toString() {
		return "Toms [id=" + id + ", username=" + username + ", password=" + password + ", privId=" + privId + "]";
	}
	public Tom() {
		super();
	}
	public Tom(Integer id, String username, String password, Integer privId) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.privId = privId;
	}
	
	
}
