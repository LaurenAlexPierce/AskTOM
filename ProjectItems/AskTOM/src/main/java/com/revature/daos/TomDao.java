package com.revature.daos;

import java.util.List;

import com.revature.beans.Tom;

public interface TomDao {
	public Integer insertTom(Tom t);
	public List<Tom> getAllToms();
	public Tom selectTomByUsername(String uname);
	public Tom selectTomById(Integer id);
	public Tom updateTomById(Tom t);
	public void removeTom(Integer id);
}
